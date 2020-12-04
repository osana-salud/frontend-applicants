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
              name="la la-gitlab"
            />
            Gitlab
          </div>
          <div class="text-overline" v-if="user.location">
            <q-icon name="la la-map-marker" size="xs" />
            {{user.location}}
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="primary" icon="la la-angle-left" label="Volver" @click="$router.back()"/>
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
import Gitlab from '../services/users/gitlab.service'

export default {
  name: 'UsersDetailsPage',

  data(){
    return {
      user:{}
    }
  },

  async mounted(){
    this.user = await Gitlab.getUserInfo(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.user_card {
  width:100%;
  max-width: 700px;
}
</style>
