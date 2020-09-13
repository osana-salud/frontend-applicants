<template>
  <div class="search-container">
    <form ref="form" @submit="search" class="form">
      <div class="input-container">
         <input v-model="name" 
             placeholder="Search users..." 
             required />
         <div class="span" v-if="!err"></div>   
         <p v-else class="err-msg">{{ err }}</p>
       </div>
      <button class="submit-btn" @click="search">Buscar</button>     
    </form>
  </div>
</template>

<script>
import { actions } from "@/store";

export default {
  data() {
    return {
      name: "",
      inputRules: [
        (value) => value.length >= 4 || "Mínimo de 4 caracteres",
        (value) => this.validate(value) || "Búsqueda no permitida",
      ],
      err: ""
    };
  },
  watch: {
    name(value) {
      this.name = value;
      this.validateLength(value);      
    }
  },
  methods: {
    ...actions,
    search(e) {
      e.preventDefault();
      if (this.err.length > 0) return
      this.validateSearch(this.name)
      if (!this.err) {
        this.fetchUsersFromApi(this.name);
      }
    },
    validateLength(input) {
      if (input.length < 4) {
        this.err = "Mínimo de 4 caracteres"
      } else this.err = ""
    },
    validateSearch(input) {
      const pattern = /(osana-salud)+/g;
      if (pattern.test(input)) {
        this.err = "Búsqueda no permitida"
      } else this.err = ""
    },
  },
};
</script>

<style scoped src="./searchBarStyle.css"></style>