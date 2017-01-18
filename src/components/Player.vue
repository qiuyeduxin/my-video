<template>
  <div class="player-wrapper container-bg" >
      <player-audio :play-data="song" v-if='song.type==1'></player-audio>
      <player-video :play-data="song" v-if='song.type==2'></player-video>
  </div>
</template>
<script>
import {getPlayList} from '../vuex/getters';
export default {
  data (){
    return {
              song: {
                  id: 0,
                  name: '',
                  sourceUrl: '',
                  lyricUrl: ''
              }
    }
  },
  vuex: {
    getters: {
         getPlayList
    }
  },
  components: {
    'player-audio': reslove => { return require(['./PlayerAudio.vue'],reslove) },
    'player-video': reslove => { return require(['./PlayerVideo.vue'],reslove) }
  },
  route: {
    data() {
      let query = this.$route.params;
      let local_data = this.getPlayList[ query.songId-1];
      if( local_data ){
        this.song = local_data;
      }
    }
  }
}
</script>
<style scoped>
.player-wrapper{
     height: 100%;
}
</style>
