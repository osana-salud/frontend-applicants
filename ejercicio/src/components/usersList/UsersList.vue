<template>
  <div class="table-container">
    <table>
      <tr class="table-title">
        <th colSpan="3">USERS</th>
      </tr>
      <tr>
        <td></td>
        <td class="title">Username</td>
        <td class="title">ID</td>
      </tr>

      <tr
        v-for="user in users"
        :key="user.login"
        :id="user.login"
        @click="() => handleClick(user.login)"
      >
        <td>
          <div class="img-container">
            <img :src="user.avatar_url" alt="user.login" class="user-avatar"/>
          </div>  
        </td>
        <td>{{ user.login }}</td>
        <td>{{ user.id }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getters, actions } from "@/store";

export default {
  name: "UsersList",
  computed: {
    ...getters,
  },
  methods: {
    ...actions,
    handleClick(e) {
      this.$router.push(`/user/${e}`);
    }
  }
};
</script>

<style scoped src="./usersListStyle.css"></style>