<template>
  <q-page class="flex" :class="{'flex-center': !$store.state.users.users.length}">
    <div class="row full-width justify-center" :class="{'q-pt-sm': $store.state.users.users.length}">
      <div class="col-11 col-sm-8 col-md-6 col-lg-4">
        <search-users @searchUsers="onSearchUsers"/>
        <users-grid :users="$store.state.users.users"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import SearchUsers from 'components/SearchUsers.vue';
import Github from 'src/services/users/github.service';
import Gitlab from 'src/services/users/gitlab.service';
import UsersGrid from 'src/components/UsersGrid.vue';


export default {
  name:'UsersPage',

  components:{
    SearchUsers,
    UsersGrid
  },

  methods:{
    async onSearchUsers(e){
      let users = [];

      if(e.source==='github'){
        users = await Github.getUsers(e.q);
      }else {
        users = await Gitlab.getUsers(e.q);
      }

      if(!users.length){
        this.$q.notify({
          message: "No se encontraron usuarios, intente con otra búsqueda.",
          color: "orange-6",
          icon: "la la-warning",
          group: false,
          timeout: 1500
        });
        this.$store.dispatch('users/setUsers', [])
        return false;
      }

      this.$store.dispatch('users/setQ', e.q)
      this.$store.dispatch('users/setUsers', users)
    }
  }
}
</script>

<style>

</style>
