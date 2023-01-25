<template>
  <div class="cards">
    <v-card
        class="mx-auto my-12"
        max-width="250"
        width="100%"
        v-for="item in episodes"
        v-bind:key="item.id"
    >
      <v-card-title class="cards-title mb-8">
        {{ item.name }}
      </v-card-title>
      <v-card-text>
        <v-row
            align="center"
            class="mx-0 mb-2"
        >
          {{ item.air_date }}
        </v-row>
      </v-card-text>
      <v-card-subtitle class="mb-4">
        {{ item.episode }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn
            color="deep-purple lighten-2"
            text
        >
          <router-link :to="'/episode/'+item.id">
            Look closely
          </router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

// Components


export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      episodes: [],
    }
  },
  methods: {
    getEpisodes(page) {
      this.$store.dispatch('SET_EPISODES', page)
    },
    async getAllEpisodes() {
      await this.getEpisodes(1);
      await this.getEpisodes(2);
      await this.getEpisodes(3);
      this.episodes = this.$store.getters.EPISODES;
    }
  },
  mounted() {
    this.getAllEpisodes()
  }
});
</script>

<style scoped lang="less">
.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
</style>
