<template>
  <div>
    <div v-for="user in users" :key="user['id']">
      <q-card class="user_card q-mx-xs q-my-md" flat bordered @click="userClick(user)">
        <q-item>
          <q-item-section avatar>
            <q-avatar size="64px">
              <img :src="user['avatar_url']">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <span class="text-h4">{{user['name']}}</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersGrid',

  props:{
    users: {
      type: Array,
      required: true
    }
  },

  methods: {
    userClick(user){
      const id = user.source==='github' ? user.name : user.id;
      this.$router.push(`/users/${user.source}/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.user_card {
  &:hover {
    color:white;
    background-color:$indigo-7;
    box-shadow: 8px 8px $deep-orange !important;
    cursor: pointer;
  }
}
</style>
