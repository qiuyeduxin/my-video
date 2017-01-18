<template>
  <div class="app container-bg" v-show="ajaxCompeted">
         <playlist></playlist>
  </div>
</template>

<script>
import playlist from './PlayList.vue';
import {initData} from '../vuex/actions';

export default {
  data (){
       return {
              ajaxCompeted: false,
              isNormal: false
       }
  },
  components: {
    playlist
  },
  vuex: {
      actions: {
           initData
      }
  },
   ready() {
       let vueThis = this;
       this.$http.get('/song.json',{ params: vueThis.$route.params }).then((rep) => {
        vueThis.ajaxCompeted = true;
        let httpData = rep.json();
      if(httpData.errno===0){
          vueThis.isNormal = true;
          this.initData(httpData.data);
        }
      }, (rep) => {
        vueThis.ajaxCompeted = true;
        console.log(rep);
      });
  }
}
</script>
