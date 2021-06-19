<template>
  <div>
    <br>
    <h1 style="padding: 10px;" class="title is-1">Buscar Repos</h1>
    <br>

    <div class="container" style="padding: 10px;">
      <div class="row">
        <div class="field is-grouped">
          <p class="control is-expanded" :class="{ 'is-loading': isLoading }">
            <input class="input" type="text" placeholder="Buscar usuarios" v-model="user" @keydown.13.prevent="searchRepos(user)">
          </p>
          <div class="control">
            <a class="button is-info" @click="searchRepos(user)">
              <span class="icon">
                <i class="fas fa-search"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <br>

    <h3 style="padding: 10px;" class="subtitle is-1">Resultados</h3>

    <br>

    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card" v-for="item in getRepoGitHub" :key="item.id">
          <div class="card-content">
            <div class="content">
              <router-link :to="{ name: 'SearchUserGitHub', params: { item } }">
                <strong>{{ item.login }} - {{ item.id }}</strong>
                <img src="../assets/github.png" height="40" width="72" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-two-fifths">
        <div class="card" v-for="item in getRepoGitLab" :key="item.id">
          <div class="card-content">
            <div class="content">
              <router-link :to="{ name: 'SearchUserGitlab', params: { item } }">
                <strong>{{ item.name }} - {{ item.id }}</strong>
                <img src="../assets/gitlab.png" height="60" width="40" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      user: '',
      repos: [],
      isLoading: false
    }
  },

  methods: {
    resetData() {
      this.user = '';
    },

    async searchRepos(user) {
      this.isLoading = true;
      if (this.user.trim().length > 3 && this.user !== "osana-salud") {
        try {
          await this.$store.dispatch("github/searchRepoGitHub", {
            user: this.user
          });
          await this.$store.dispatch("gitlab/searchRepoGitLab", {
            user: this.user
          });
          this.resetData();
        } catch (error) {
          this.$toast.error(error.message);
          console.error(error.message);
        } finally {
          this.isLoading = false;
        }
      } else {
        this.$toast.error("La busqueda debe tener mas de 4 caracteres");
        this.resetData();
        this.isLoading = false;
      }
    }
  },

  computed: {
    ...mapGetters('github', ['getRepoGitHub']),
    ...mapGetters('gitlab', ['getRepoGitLab']),
  }
  /*components: {
    HelloWorld
  }*/
};
</script>
