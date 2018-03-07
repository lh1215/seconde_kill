// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import {
  Toast,
  Header,
  Button,
  Swipe,
  SwipeItem,
  InfiniteScroll
} from 'mint-ui'
import './config/rem'
import 'mint-ui/lib/style.css'
import 'page/style/rewrite.css'
import 'page/style/page.css'

// Vue.use(MutiUI)
Vue.component(Toast.name, Toast);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(InfiniteScroll);

new Vue({
  el: '#app',
  store,
  router,
  ...App
})
