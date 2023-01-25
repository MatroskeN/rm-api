<template>
  <v-app>
      <v-app-bar
          color="white"
          shaped
          elevation="5" >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Rick and Morty API</v-toolbar-title>

      </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
