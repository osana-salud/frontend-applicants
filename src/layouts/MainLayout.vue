<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-indigo">
        <q-toolbar-title>
          <q-icon name="la la-universal-access" size="lg"/>
          Buscador de Usuarios
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
