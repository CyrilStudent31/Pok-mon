<template>
  <Header/>
  <h1>BATTLE</h1>
  <!-- Conteneur principal du combat -->
  <div id="container">
    <div id="container-adversaire">
        <div id="adversaire" style="width: 100%; height: 100%;">
            <div id="image-adversaire">
                <img :src="pokemon1" alt="adversaire" class="img-fluid" style="width: 100px; height: 100px;" />
            </div>
            <h2>Monstre ❤️ ({{ PvAdversaire }}HP)</h2>
            <!-- Barre de vie du monstre -->
            <div class="life-bar">
                <div v-bind:style="lifeProgress1"></div>
            </div>
        </div>
    </div>

    <div id="container-joueur">
        <div id="joueur" style="width: 100%; height: 100%;">
            <div id="image-joueur">
                <img :src="pokemon2" alt="joueur" class="img-fluid" style="width: 100px; height: 100px;"/>
            </div>
            <h2>Joueur 💙 ({{ PvPlayer }}HP)</h2>
            <!-- Barre de vie du joueur -->
            <div class="life-bar">
                <div v-bind:style="lifeProgress2"></div>
            </div>
        </div>
    </div>
    
    <!-- Battle buttons with functionality -->
    <div id="container-buttons">
        <button type="button" class="btn btn-primary" @click="attackPlayer" :disabled="gameOver">ATK</button>
        <button type="button" class="btn btn-warning" @click="attaqueAdversaireSpe" :disabled="gameOver">ATK SPECIAL</button>
        <button type="button" class="btn btn-success" @click="healPlayer" :disabled="gameOver">SOIN</button>
        <button type="button" class="btn btn-danger" @click="surrender">ABANDONNER</button>
    </div>
    
    <!-- Battle log -->
    <LogView :log="log" />
    
    <!-- Game over modal -->
    <TemplateGameOver 
      :vieJoueur="PvPlayer" 
      :vieAdversaire="PvAdversaire" 
      @reset-game="resetGame" 
    />
  </div>
  <li><RouterLink to="/" class="hover:text-primary">Accueil</RouterLink></li>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import Header from '../components/Header.vue'
    import AllButtom from '../components/allButtom.vue'
    import LogView from '../components/logview.vue'
    import TemplateGameOver from '../components/templateGameOver.vue'
    import pokemon1 from '../assets/image/pokemon1.gif'
    import pokemon2 from '../assets/image/pokemon2.gif'

    // Game state
    const PvPlayer = ref(100)
    const PvAdversaire = ref(100)
    const log = ref([])
    
    // Game over detection
    const gameOver = computed(() => PvPlayer.value <= 0 || PvAdversaire.value <= 0)

    // Health bars for monster (life1 = adversaire)
    const life1 = computed(() => PvAdversaire.value)
    const bgColor1 = computed(() => {
        if (life1.value >= 100) return "blue"
        else if (life1.value > 50) return "lightGreen"
        else if (life1.value > 20) return "orange"
        else return "red"
    });
    const lifeProgress1 = computed(() => ({
        backgroundColor: bgColor1.value,
        width: life1.value + "%"
    }));

    // Health bars for player (life2 = joueur)  
    const life2 = computed(() => PvPlayer.value)
    const bgColor2 = computed(() => {
        if (life2.value >= 100) return "blue"
        else if (life2.value > 50) return "green"
        else if (life2.value > 20) return "orange"
        else return "red"
    });
    const lifeProgress2 = computed(() => ({
        backgroundColor: bgColor2.value,
        width: life2.value + "%"
    }));

    // Battle functions
    const attackPlayer = () => {
        if (gameOver.value) return
        
        // Player attacks adversaire
        const damage = Math.floor(Math.random() * 15) + 10
        if (damage < PvAdversaire.value) {
            PvAdversaire.value -= damage
        } else {
            PvAdversaire.value = 0
        }
        log.value.push(`Joueur attaque : -${damage} HP au monstre`)
        
        // Adversaire counter-attacks if still alive
        if (PvAdversaire.value > 0) {
            setTimeout(() => {
                attaqueAdversaire()
            }, 1000)
        }
    }

    const attaqueAdversaire = () => {
        if (gameOver.value) return
        
        const damage = Math.floor(Math.random() * 15) + 5
        if (damage < PvPlayer.value) {
            PvPlayer.value -= damage
        } else {
            PvPlayer.value = 0
        }
        log.value.push(`Monstre attaque : -${damage} HP au joueur`)
    }

    const attaqueAdversaireSpe = () => {
        if (gameOver.value) return
        
        // Player special attack
        const damage = Math.floor(Math.random() * 25) + 15
        if (damage < PvAdversaire.value) {
            PvAdversaire.value -= damage
        } else {
            PvAdversaire.value = 0
        }
        log.value.push(`Joueur attaque spéciale : -${damage} HP au monstre`)
        
        // Adversaire counter-attacks if still alive
        if (PvAdversaire.value > 0) {
            setTimeout(() => {
                attaqueAdversaire()
            }, 1000)
        }
    }

    const healPlayer = () => {
        if (gameOver.value) return
        
        const healing = Math.floor(Math.random() * 20) + 10
        PvPlayer.value = Math.min(100, PvPlayer.value + healing)
        log.value.push(`Joueur se soigne : +${healing} HP`)
        
        // Adversaire attacks while player heals
        setTimeout(() => {
            attaqueAdversaire()
        }, 1000)
    }

    const surrender = () => {
        PvPlayer.value = 0
        log.value.push("Joueur abandonne le combat")
    }

    const resetGame = () => {
        PvPlayer.value = 100
        PvAdversaire.value = 100
        log.value = []
        log.value.push("Nouveau combat commencé !")
    }

    // Initialize game
    log.value.push("Le combat commence !")
</script>

<style scoped>
    #image-adversaire {
        width: 100px;
        height: 100px;
    }
    #image-joueur {
        width: 100px;
        height: 100px;
    }
    #adversaire {
        background-color: rgb(255, 212, 212);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        
    }
    #joueur {
        background-color: rgb(175, 175, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
    }

    .life-bar {
        margin: 10px;
        width: 200px;
        height: 20px;
        border: 2px solid grey;
        border-radius: 10px;
        background-color: #f0f0f0;
    }

    .life-bar > div {
        height: 100%;     
        transition: width 1s ease;
        border-radius: 8px;
    }

    #container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    #container-adversaire {
        margin-bottom: 10px;
        border: 1px solid black;
        border-radius: 10px;
    }

    #container-joueur {
        margin-top: 10px;
        border: 1px solid black;
        border-radius: 10px;
    }

    #container-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 20px 0;
    }

    button {
        margin: 10px;
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
    }

    .btn-warning {
        background-color: #ffc107;
        color: black;
    }

    .btn-success {
        background-color: #28a745;
        color: white;
    }

    .btn-danger {
        background-color: #dc3545;
        color: white;
    }

    button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>