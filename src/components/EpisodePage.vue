<template>
  <div>
    <v-card max-width="250">
      <v-card-title class="mb-10">
        {{ episode.name }}
      </v-card-title>
      <v-card-text>
        <v-row
            class="mx-0 mb-2"
        >
          {{ episode.air_date }} <br>
          Characters used: {{characters_count}}
        </v-row>
      </v-card-text>
      <v-card-subtitle class="mb-4">
        {{ episode.episode }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EpisodePage',
  props: {
    id: Number
  },
  data() {
    return {
      episode: [],
      characters_count: null,
    }
  },
  methods: {
    async getEpisode(id) {
      await this.$store.dispatch('SET_SINGLE_EPISODE', id)
      this.episode = this.$store.getters.SINGLE_EPISODE;
      this.characters_count = this.episode.characters.length;
    }
  },
  mounted() {
    this.getEpisode(this.id);
  }
}
</script>
