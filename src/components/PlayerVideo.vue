<template>
  <div class="player-video-wrapper">
        <div class="player-mediaInfo">
          <div class="player-left">
            <div class="player-title">
               <div class="player-musicName fs32 texthidden">{{ PlayData.name }}</div>
               <div class="player-username fs28 texthidden">{{ PlayData.singer }}</div>
            </div>
          </div>
        </div>
        <div class="player-tabs">
           <div class="player-tabContainer" :class="{ 'activelyric':activelyric, 'activeDescript':activeDescript }" v-touch:swipeleft="changeTab('left',$event)" v-touch:swiperight="changeTab('right',$event)">
              <div class="player-tab-lyric">
                    <div class="zy_media">
                      <video v-touch:tap="play">
                      </video>
                    </div>
              </div>
              <div class="player-tab-descript">
                  <div class="player-tab-descript-c">
                    <p class="containerSidePadding fs32">歌曲介绍：</p>
                  </div>
              </div>
              <div class="player-tab-dot">
                <span class="dot" :class="{ 'active':activelyric }"></span>
                <span class="dot" :class="{ 'active':activeDescript }"></span>
              </div>
           </div>
        </div>
  </div>
</template>
<script>
require('../common/media/zy.media.css');
var media = require('../common/media/zy.media.js');
export default {
  props: ['PlayData'],
  ready () {  
    let vueThis=this;
    media('video',{
        timeElm: true,
        preload: 'load',
        videoHeight: '100%',
        enableFullscreen: false,
        alwaysShowControls: false,
        src: vueThis.PlayData.sourceUrl
      });
  },
  data (){
    return {
         activelyric: true,
         activeDescript: false,
         playStatus: true
    }
  },
  methods: {
    changeTab (val,event){
      if( val == 'left'){
        this.activeDescript = true;
        this.activelyric = false;
      }else if( val == 'right'){
        this.activeDescript = false;
        this.activelyric = true;
      }
    }
  }
}
</script>
<style>
.player-video-wrapper{height: 100%;}
.player-mediaInfo{height: 1.4rem;position: fixed;top:0;left:0;width: 100%;z-index: 9999;}
.player-left{position: relative;box-sizing: border-box;height: 100%;padding-right: 1.5rem;}
.zy_playpause_btn{position: absolute;left:50%;margin-left:-0.7rem;bottom:3.5rem;width: 1.4rem;height: 1.4rem;z-index: 99;background-color: white}
.zy_play{ background:url(../images/icon/icon-video-play.png) no-repeat;background-size: contain;}
.zy_pause{background:url(../images/icon/icon-video-pause.png) no-repeat;background-size: contain;}
.player-userAvatar{width: 0.8rem;height: 0.8rem;position: absolute;top: 0.3rem;left: 0.3rem;border-radius: 50%;-webkit-border-radius: 50%}
.player-title{padding:0.3rem 0 0 1.3rem;}
.player-musicName{color: #fff;}
.player-username{color: #c8c8c8;}
.player-tabs{height: 100%;box-sizing: border-box;}
.player-tabContainer{height: 100%;position: relative;overflow: hidden;}
.player-tab-lyric,.player-tab-descript{
    position: absolute;
    top: 0;
    width:100%;
    height: 100%;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    word-break: break-all;
}
.player-tab-lyric{}
.player-tab-descript{left: 100%;color: #a9a8a8;box-sizing: border-box;height: 7.5rem;}
.player-tab-descript-c{height:100%;overflow:hidden;background: rgba(0,0,0,0.9);padding-top: 1.8rem; box-sizing: border-box;}
.player-tabContainer.activelyric .player-tab-lyric{left: 0;}
.player-tabContainer.activelyric .player-tab-descript{left: 100%;}
.player-tabContainer.activeDescript .player-tab-lyric{left: 0;}
.player-tabContainer.activeDescript .player-tab-descript{left: 0;}
.player-tab-dot{position: absolute;width:0.52rem;height: 0.12rem;bottom: 1.5rem; left: 50%; margin-left: -0.26rem;}
.player-tab-dot span{display: block;width: 0.12rem;height: 0.12rem;background:#fff;border-radius: 50%;-webkit-border-radius: 50%;float:left;margin: 0 0.07rem;}
.player-tab-dot span.active{background: #c8c8c8;}
</style>
