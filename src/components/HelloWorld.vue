<template>
  <div class="hello">
    <contact-component></contact-component>
    <h1>{{ msg }}</h1>
    <p>{{sayHello()}}</p>
    <p v-once>{{title}} - {{showPost()}}</p>
    <a v-bind:href="link">Facebook</a>
    <p v-html="testHtml"></p>
    <p>click to show count</p>
    <p v-on:mouseover="stopChuot">Dung dem toa do</p>
    <button ref="infoBtn" v-on:click="increaseCount">click me</button>
    <button v-on:click="count++">click me javascript</button>
    <p>count: {{count}}</p>
    <p>count: {{count > 20 ? 'vuot gioi han' : 'hop le'}}</p>
    <p v-on:mouseover="calculateCordiate">thay doi toa do</p>
    <p>Toa do chuot: x = {{x}} | y = {{y}}</p>
    <input type="text" @keyup.enter="nhapdata" />
    <br>
    <input type="text" v-model="name">
    <p>Name: {{name}}</p>
    <p>gia tri a: {{tanga}}</p>
    <p>gia tri b: {{tangb}}</p>
    <button v-on:click="a++">tang a</button>
    <button v-on:click="b++">tang b</button>
    <button @click="changeLink">click change link</button>
    <a :href="linkVal">{{linkVal}}</a> <br>
    <div class="square" @click="isRed = !isRed" :class="{red: isRed}"></div>
    <div class="square" :style="customStyle"></div>
    <div class="square" :style="[customStyle, {height: width + 'px'}]"></div>
    <div class="square" :class="[color, {red: isRed}]"></div>
    <div class="square" :style="{backgroundColor: color}"></div>
    <input type="text" v-model="color">
    <input type="text" v-model="width">
    <p ref="qText">Are you a docter?</p>
    <button @click="isSpecify = !isSpecify">Change</button>
    <p v-if="isSpecify">Yes, a docter</p>
    <p v-else>No, im not</p>
    <template v-if="isSpecify">
      <div>menu</div>
      <div>menu</div>
      <div>menu</div>
      <div>menu</div>
    </template>
    <p v-show="isSpecify">kiem tra noi dung</p>
    <ul>
      <li v-for="(menu, index) in menus" :key="index">{{menu}}</li>
    </ul>
    <button @click="menus.push('new test')">Add item to menu</button>
    <template v-for="(menu, index) in menus">
      <div :key="`list0_${index}`">
        <h3>{{menu}}</h3>
        <p>index: {{index}}</p>
      </div>
    </template>
    <div v-for="(student, index) in students" :key="`list1_${index}`">
      <div>{{student.name}} / {{student.age}} / {{student.class}}</div>
    </div>
    <div v-for="(student, index) in students" :key="`list2_${index}`">
      <div v-for="(info, key, i) in student" :key="`list2_${index}_${key}`">key: {{key}} / info: {{info}} / index: {{i}}</div>
    </div>
    <br>
    <button @click="destroyCurrent">Destroy component</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      content: 'chao mung ban',
      title: 'sample title',
      link: 'https://tet.com',
      testHtml: '<a href="https://abc.com">this is a link</a>',
      count: 0,
      x: 0,
      y: 0,
      name: 'hoang',
      a: 0,
      b: 0,
      linkVal: 'https://ggl.com',
      isRed: false,
      color: 'green',
      width: '100',
      isSpecify: true,
      menus: ['home', 'about', 'contact', 'faq'],
      students: [
        {name: 'jonh', age: 18, class: 'cntt'},
        {name: 'marry', age: 28, class: 'qtkd'},
        {name: 'smith', age: 22, class: 'tcng'}
      ]
    }
  },
  methods: {
    sayHello: function(){
      return this.title;
    },
    showPost: function() {
      this.title = 'noi dung cap nhat';
      return this.title;
    },
    increaseCount: function(){
      this.count++;
      this.$refs.infoBtn.innerText = "increasing...";
      console.log(this);
    },
    calculateCordiate: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },
    stopChuot: function(event) {
      event.stopPropagation();
    },
    nhapdata: function() {
      alert('da enter')
    },
    changeLink: function(){
      this.linkVal = 'https://hcm.com'
    },
    destroyCurrent: function() {
      this.$destroy()
    }

  },
  computed: {
    tanga: function() {
      console.log('goi function a');
      return this.a;
    },
    tangb: function(){
      console.log('goi function b');
      return this.b;
    },
    divClasses: function(){
      return {
        red: this.isRed,
        blue: !this.isRed,
        a: this.isRed,
      }
    },
    customStyle: function(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px',

      }
    }
  },
  watch: {
    count: function(newValue){
      console.log('count changed! ' + newValue)
    }
  },
  beforeCreate: function() {
    console.log('beforeCreated');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.square {
  width:  100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin:  10px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
</style>
