<template>
  <div id="game-app-content">
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <img src="./assets/img/chibi.png" alt="" style="height: 500px; width: 100%">

            <div class="healthbar">
                <div class="healthbar text-center" style="background-color: red; margin: 0; color: white;" :style="{width: playerHealth + '%'}">
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <img src="./assets/img/monster.png" alt="" style="height: 500px; width: 100%">

            <div class="healthbar">
                <div class="healthbar text-center" style="background-color: red; margin: 0; color: white;" :style="{width: monsterHealth + '%'}">
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="!gameIsRunning">
        <div class="small-12 columns">
            <button id="start-game" @click="startNewGame">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-else>
        <div class="small-12 columns">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>
        </div>
    </section>
    <section class="row log" v-if="turns.length > 0">
        <div class="small-12 columns">
            <ul>
                <li v-for="(turn, index) in turns" :key="`turn_${index}`" :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}">
                  {{turn.textLog}}
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import './assets/stylesheets/foundation.min.css'

export default {
  name: 'GameApp',
  data: function() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: []
    }
  },
  methods: {
    startNewGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = []
    },
    attack: function() {
      if(this.checkPlayerOptions()) {
        return;
      }
      // monster
      var damage = this.inputDamage(4, 10)
      this.monsterHealth -= damage;
      this.turns.unshift({isPlayer: true, textLog: 'Player hit monster for ' + damage})

      this.monsterAttack();
    },
    specialAttack: function() {
      if(this.checkPlayerOptions()) {
        return;
      }
      // monster
      var damage = this.inputDamage(10, 20)
      this.monsterHealth -= damage;
      this.turns.unshift({isPlayer: true, textLog: 'Player hit monster for ' + damage})

      this.monsterAttack();
    },
    heal: function() {
      if(this.playerHealth >= 70) {
        return;
      } else if(this.playerHealth <= 60) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 70;
      }
      this.turns.unshift({isPlayer: true, textLog: 'Player heal for 10'});
      this.monsterAttack();
    },
    giveUp: function() {
      this.gameIsRunning = false;
      this.turns = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
      alert('you lost!');
    },
    inputDamage: function(minDamage, maxDamage) {
      return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
    },
    checkPlayerOptions: function() {
      if(this.monsterHealth <= 0) {
        if(confirm('you won ! new game?')) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if(this.playerHealth <= 0) {
        if(confirm('monster won ! new game?')) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return;
    },
    monsterAttack: function() {
      var damage = this.inputDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({isPlayer: false, textLog: 'Monster hit player for ' + damage})
      this.checkPlayerOptions();
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
}
.text-center {
    text-align: center;
}

.healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
}

button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
}

#start-game {
    background-color: #aaffb0;
}

#start-game:hover {
    background-color: #76ff7e;
}

#attack {
    background-color: #ff7367;
}

#attack:hover {
    background-color: #ff3f43;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}
</style>
