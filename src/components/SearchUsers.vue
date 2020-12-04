<template>
  <q-input
    v-model="q"
    square
    outlined
    color="indigo"
    :class="{padding_top:!$store.state.users.users.length}"
    :label="`Buscar usuarios en ${$store.state.users.source === 'github' ? 'GitHub' : 'GitLab'}`"
    @keyup.enter.native="onSearch"
  >
    <template v-slot:prepend>
      <q-icon
        :name="$store.state.users.source === 'github' ? 'la la-github' : 'la la-gitlab'"
        :class="$store.state.users.source === 'github' ? 'text-black' : 'text-deep-orange'"
      />
    </template>
    <template v-slot:append>
      <q-btn round flat color="deep-purple" icon="la la-cog">
        <q-tooltip
          anchor="top right"
          self="top middle"
          :offset="[0, 30]"
          content-class="bg-deep-purple"
        >
          Haga click aqui para cambiar de plataforma
        </q-tooltip>
        <q-menu anchor="bottom end" self="top end" v-model="showSourceSelector">
          <div class="q-py-xs q-px-md">
            <div class="q-py-md text-center">
              Buscar usuarios en
            </div>

            <q-btn
              class="full-width"
              flat
              icon="la la-github"
              label="GitHub"
              :color="$store.state.users.source === 'github' ? 'black' : 'grey-6'"
              @click="onChangeSource('github')"
            />

            <q-btn
              class="full-width"
              flat
              icon="la la-gitlab"
              label="GitLab"
              :color="$store.state.users.source === 'gitlab' ? 'black' : 'grey-6'"
              @click="onChangeSource('gitlab')"
            />
          </div>
        </q-menu>

      </q-btn>

      <q-btn
        round
        flat
        icon="la la-search"
        color="indigo"
        :disable="q.length < 4"
        @click="onSearch"
      >

        <q-tooltip
          anchor="top right"
          self="top middle"
          :offset="[0, 30]"
          content-class="bg-indigo"
        >
          Buscar
        </q-tooltip>

      </q-btn>

    </template>
  </q-input>
</template>

<script>
export default {
  name:'SearchUsers',
    data(){
      return {
        showSourceSelector: false,
        q: ''
      }
  },

  methods: {
    onChangeSource(source){
      this.$store.dispatch('users/setSource', source)
      this.showSourceSelector = false
      this.onSearch();
    },

    onSearch(){
      if( this.q.length < 4 ) {
        this.$q.notify({
          message: "Debe ingresar al menos 4 carácteres para realizar una búsqueda",
          color: "red-6",
          icon:'la la-warning',
          group: false,
          timeout: 1500
        });

        return false;
      };

      if( this.q.toLowerCase() === 'osana-salud' ) {
        this.$q.notify({
          message: "Esta busqueda está prohibida",
          color: "red-6",
          icon:'la la-warning',
          group: false,
          timeout: 1500
        });

        return false;
      };

      this.$q.loading.show();

      this.$emit('searchUsers', {q: this.q, source: this.$store.state.users.source});

      window.setTimeout( () => this.$q.loading.hide(), 300)
    }
  },

  mounted(){
    this.q = this.$store.state.users.q.toString()
  }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width:768px) {
  .padding_top {
    transform: translateY(-15vh);
  }
}
</style>
