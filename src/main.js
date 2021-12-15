import Vue from 'vue'
import VueResource from 'vue-resource'
import Contact from './components/Contact.vue'
import App from './App.vue'
import GameApp from './GameApp.vue'
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

new Vue({
  render: h => h(App),
}).$mount('#app')

var vn = new Vue({
  render: h => h(GameApp),
}).$mount('#game-app')

console.log(App.components.HelloWorld);
// App.components.HelloWorld.$refs.qText.innerText = 'will be a docter?';
console.log(vn);
