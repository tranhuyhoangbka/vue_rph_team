import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Contact from './components/Contact.vue'
import App from './App.vue'
import GameApp from './GameApp.vue'
import {routes} from './routes'

export const eventBus = new Vue({
  methods: {
    sendAddress: function(addr) {
      this.$emit('injectedData', addr)
    }
  }
})

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = 'https://***/data.json';

Vue.component('contact-component', Contact);

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 500 }
    if (savedPosition){
      return savedPosition;
    }
    if(to.hash) {
      return {selector: to.hash}
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('before navigation');
  next();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

var vn = new Vue({
  render: h => h(GameApp),
}).$mount('#game-app')

console.log(App.components.HelloWorld);
// App.components.HelloWorld.$refs.qText.innerText = 'will be a docter?';
console.log(vn);
