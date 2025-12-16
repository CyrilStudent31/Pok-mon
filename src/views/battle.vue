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
            <h2>Monstre ❤️</h2>
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
            <h2>Joueur 💙</h2>
            <!-- Barre de vie du joueur -->
            <div class="life-bar">
                <div v-bind:style="lifeProgress2"></div>
            </div>
        </div>
    </div>
    <AllButtom />
  </div>
  <li><RouterLink to="/" class="hover:text-primary">Accueil</RouterLink></li>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import Header from '../components/Header.vue'
    import AllButtom from '../components/allButtom.vue'
    import pokemon1 from '../assets/image/pokemon1.gif'
    import pokemon2 from '../assets/image/pokemon2.gif'

    // Barre de vie du 1er personnage (monstre)
    const life1 = ref(100);
    const bgColor1 = computed(() => {
        if (life1.value == 100){
            return "blue"}
        else if (life1.value > 50){
            return "lightGreen"}
        else if (life1.value > 20){
            return "orange"} 
        else return "red";
    });
    const lifeProgress1 = computed(() => ({
        backgroundColor: bgColor1.value,
        width: life1.value + "%"
    }));

    // Barre de vie du 2eme personnage (joueur)
    const life2 = ref(100);
    const bgColor2 = computed(() => {
        if (life2.value == 100){
            return "blue"}
        else if (life2.value > 50){
            return "green"}
        else if (life2.value > 20){
            return "orange"} 
        else return "red";
    });
    const lifeProgress2 = computed(() => ({
        backgroundColor: bgColor2.value,
        width: life2.value + "%"
    }));
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
</style>