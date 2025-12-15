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
        </div>
    </div>

    <div id="container-joueur">
        <div id="joueur" style="width: 100%; height: 100%;">
            <div id="image-joueur">
                <img :src="pokemon2" alt="joueur" class="img-fluid" style="width: 100px; height: 100px;"/>
            </div>
            <h2>Joueur 💙</h2>
        </div>
    </div>
  </div>
  <li><RouterLink to="/" class="hover:text-primary">Accueil</RouterLink></li>
</template>

<script setup>
    import Header from '../components/Header.vue'
    import pokemon1 from '../assets/image/pokemon1.gif'
    import pokemon2 from '../assets/image/pokemon2.gif'
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