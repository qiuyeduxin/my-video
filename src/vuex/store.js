import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 应用初始化状态
const state = {
       songs: []
}
const mutations = {
  	INIT_DATA (state,data){
  		state.songs= data.songs;
  	}
}
export default new Vuex.Store({
	  state,
	  mutations
})