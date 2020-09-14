<template>
  <div class="home">
    <SearchBar />
    <Spinner v-if="isFetching" />
    <div class="main-container">      
      <UsersList v-if="users.length > 0" />
      <FollowersChart v-if="users.length > 0" :labels="usersNames" :data="usersFollowers"/>      
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/searchBar/SearchBar.vue";
import UsersList from "@/components/usersList/UsersList.vue";
import FollowersChart from "@/components/followersChart/FollowersChart.vue";
import Spinner from "@/components/spinner/Spinner.vue";
import { getters } from "@/store";

export default {
  name: "Home",
  components: {
    SearchBar,
    UsersList,
    FollowersChart,
    Spinner
  },
  computed: {
    ...getters
  }
};
</script>

<style scoped src="./homeStyle.css"></style>