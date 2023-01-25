<template>
  <v-container>
    <div class="episode" v-if="isExist">
      <EpisodePage :id="src" />
    </div>
    <div class="no-episode" v-if="!isExist">
      А хуюшки тебе а не эпизод
    </div>
  </v-container>
</template>

<script>
import EpisodePage from "@/components/EpisodePage";
export default {
  name: 'EpisodeView',
  components: {EpisodePage},
  data(){
    return{
      src: null,
      unfiltered: [],
      filtered: [],
      isExist: false,
    }
  },
  created() {
    this.src = this.$route.params.id;
  },
  methods: {
    async getEpisodes(page) {
      await this.$store.dispatch('SET_EPISODES', page)
    },
    async getAllEpisodes() {
      await this.getEpisodes(1);
      await this.getEpisodes(2);
      await this.getEpisodes(3);
      this.unfiltered = this.$store.getters.EPISODES;
      console.log(this.unfiltered)
      if (this.unfiltered[this.src]){
        this.isExist = true;
      } else {
        this.isExist = false;
      }
    }
  },
  mounted() {
    this.getAllEpisodes();
  }
}
</script>
