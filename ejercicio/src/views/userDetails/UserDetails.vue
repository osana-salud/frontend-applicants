<template>
  <div class="main-container">
    <div class="top-bar"></div>
    <Spinner v-if="isFetching"/>
    <div v-else class="user-details-container">
      <div class="img-container">
        <img :src="user.avatar_url" loading="lazy" alt="user.login" width="500" height="400" />
      </div>
      <div class="details-container">
        <h2 class="username">Username: {{ user.login }}</h2>
        <p class="user-detail">Followers: {{ user.followers }}</p>
        <p class="user-detail">GitHub: {{ user.html_url }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { actions, getters } from "@/store";
import Spinner from '@/components/spinner/Spinner.vue'

export default {
  components: {
    Spinner
  },
  computed: {
    ...getters,
  },
  methods: {
    ...actions,
  },
  created() {
    this.fetchUserDetails(this.$route.params.name);
  },
};
</script>

<style scoped src="./userDetailsStyle.css"></style>