<template>
 <div  class="playList">
	<ul>
		<li v-for="item in items"><a v-link="{path: '/player/'+item.id}"><span class="song_name">{{item.name}}</span><span class="player_name">{{item.singer}}</span><span class="right icon">&gt;</span></a></li>
	</ul>
	<div class="playlist-appDownload">收藏歌单</div>
			
  </div>
</template>
<script>
import {getPlayList} from '../vuex/getters'
export default {
  vuex: {
  	getters: {
  		items: getPlayList
  	}
  }
}
</script>
<style scoped>
.playList ul li{
    clear: both;
    height: 1.25rem;
    line-height: 1.25rem;
    border-bottom: 0.025rem #777 solid;
}
.song_name,
.player_name{
    float: left;
}
.song_name{
    margin-left: 0.25rem;
}
.playList .icon{
    font-size: 0.5rem;
    margin-right: 	0.25rem;
    font-weight: bold;
}
.playList span{
    font-size: 0.35rem;
    display: block;
    color: white;
}
</style>
