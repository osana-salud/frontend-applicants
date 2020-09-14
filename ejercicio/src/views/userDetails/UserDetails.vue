<template>
  <div class="main-container">
    <div class="top-bar">
      <svg @click="goBack" class="goback-icon" viewBox="0 0 24 24">
        <path
          fill="white"
          d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"
        />
      </svg>
      <h2 class="username-topbar">{{ user.login }}</h2>
    </div>
    <Spinner v-if="isFetching" />
    <div v-else class="user-details-container">
      <div class="img-container">
        <img :src="user.avatar_url" loading="lazy" alt="user.login" width="500" height="400" />
      </div>
      <div class="details-container">
        <p class="user-detail-title">Id: </p>
        <p class="user-info">{{ user.id }}</p>
        <p class="user-detail-title">Public repos:</p> 
        <p class="user-info">{{ user.public_repos }}</p>
        <p class="user-detail-title">Followers:</p> 
        <p class="user-info">{{ user.followers }}</p>
        <p class="user-detail-title">GitHub:</p> 
        <p class="user-info">{{ user.html_url }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { actions, getters } from "@/store";
import Spinner from "@/components/spinner/Spinner.vue";

export default {
  components: {
    Spinner,
  },
  computed: {
    ...getters,
  },
  methods: {
    ...actions,
    goBack() { this.$router.go(-1) }
  },
  created() {
    this.fetchUserDetails(this.$route.params.name);
  },
};
</script>

<style scoped src="./userDetailsStyle.css"></style>