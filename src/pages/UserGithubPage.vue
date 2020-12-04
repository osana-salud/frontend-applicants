<template>
  <q-page class="flex flex-center">
    <q-card class="user_card" bordered>
      <q-card-section horizontal>
        <q-card-section class="col-3 col-md-2 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="user.avatar_url"
          />
        </q-card-section>

        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">
            {{user.name}}
            <span class="text-caption">
              @{{user.login}}
            </span>
          </div>
          <div class="text-caption text-grey">
            {{user.bio}}
          </div>
          <div class="text-overline">
            <q-icon
              size="xs"
              name="la la-github"
            />
            GITHUB
          </div>
          <div class="text-overline" v-if="user.location">
            <q-icon name="la la-map-marker" size="xs" />
            {{user.location}}
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" icon="la la-angle-left" :label="$q.platform.is.mobile?'':'Volver'" @click="$router.back()"/>
        <q-space v-show="!$q.platform.is.mobile"/>
        {{user.followers.total}} Seguidores
        <q-avatar
          class="q-ml-xs"
          :size="$q.platform.is.mobile?'xs':'md'"
          v-for="follower in user.followers.users"
          :key="follower.login"
          v-show="user.followers.total"
        >
          <img :src="follower.avatar_url"/>
          <q-tooltip self="top middle" content-class="bg-indigo-6">
            {{follower.login}}
          </q-tooltip>
        </q-avatar>
        <q-avatar circle class="q-ml-xs" color="grey-4" size="md" v-if="user.followers.total>5">
          +{{user.followers.total-5}}
          <q-tooltip self="top middle" content-class="bg-deep-purple">
            {{user.followers.total}} usuarios siguen a {{user.login}}
          </q-tooltip>
        </q-avatar>
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
import Github from '../services/users/github.service'

export default {
  name: 'UsersDetailsPage',

  data(){
    return {
      user:{}
    }
  },

  async mounted(){
    this.user = await Github.getUserInfo(this.$route.params.user)
  }
}
</script>

<style lang="scss" scoped>
.user_card {
  width:100%;
  max-width: 700px;
}
</style>
