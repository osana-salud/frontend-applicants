<template>
  <div class="home">
    <SearchBar />
    <div class="main-container">
      <Spinner v-if="isFetching" />
      <UsersList v-if="users.length > 0" />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/searchBar/SearchBar.vue";
import UsersList from "@/components/usersList/UsersList.vue";
import Spinner from "@/components/spinner/Spinner.vue"
import { getters } from "@/store";

export default {
  name: "Home",
  components: {
    SearchBar,
    UsersList,
    Spinner
  },
  computed: {
    ...getters
  }
};
</script>

<style scoped src="./homeStyle.css"></style>