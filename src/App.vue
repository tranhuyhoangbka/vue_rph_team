<template>
  <div id="app" class="container-md">
    <Header />
    <ItemsLayout :items="items" />
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-primary" @click="selectedComponent='Card'">Card</button>
        <button class="btn btn-primary" @click="selectedComponent='About'">About</button>
        <button class="btn btn-primary" @click="selectedComponent='Faq'">Faq</button>
        <keep-alive><component :is="selectedComponent"></component></keep-alive>
      </div>
    </div>
    <Card cardWords="car">
      <p>sample top</p>
      <h2 slot="title">{{cardTitle}}</h2>
      <p slot="content">white car so kkkk</p>
      <p>Not specify slot</p>
    </Card>
    <div class="row">
      <div class="col-md-12 mb-2" >
        <User />
      </div>
      <div class="col-md-6"><Servers /></div>
      <div class="col-md-6"><ServerDetails /></div>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <contact-component></contact-component>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Servers/Servers';
import ServerDetails from './components/Servers/ServerDetails.vue';
import User from './components/User';
import Card from './components/Card.vue';
import About from './components/About.vue';
import Faq from './components/Faq.vue';
import ItemsLayout from './components/ItemsLayout.vue'

export default {
  name: 'App',
  data: function() {
    return {
      cardTitle: 'white cat',
      selectedComponent: 'Card',
      items: [
        'I love you',
        'This is a dog',
        'My house is big'
      ],
      maxItems: 10
    }
  },
  components: {
    HelloWorld,
    Header,
    Footer,
    Servers,
    ServerDetails,
    User,
    Card,
    About,
    Faq,
    ItemsLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
