import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';
import VueResource from 'vue-resource';
import store from './vuex/store.js';

let devWidth = document.documentElement.clientWidth;
if( devWidth > 640 ) devWidth = 640;
document.documentElement.style.fontSize = devWidth / (750/100) + 'px';
require('./common/base.sass');

Vue.use(VueTouch);
Vue.use(VueRouter);
Vue.use(VueResource);
//顶层组件 设置title
let topVue = Vue.extend({
	store
});
let router = new VueRouter();
router.map({
       '/':{
	 component: reslove => { return require(['./components/App.vue'],reslove) }
       },
       '/player/:songId': {
	component: reslove => { return require(['./components/Player.vue'],reslove) }
       }
});

router.redirect({
        '*':"/"
});
router.start(topVue, '#mainRoute');
