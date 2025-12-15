<template>
    <h1>BATTLE</h1>
    <li><RouterLink to="/" class="hover:text-primary">Accueil</RouterLink></li>
    
    <!--Barre de vie du 1er personnage-->
    <div id="life-bar">
        <div v-bind:style="lifeProgress1"></div>
    </div>
    <!--Barre de vie du 2eme personnage-->
    <div id="life-bar">
        <div v-bind:style="lifeProgress2"></div>
    </div>
    <!--fin des barres de vie -->

</template>

<script setup>
    import { ref, computed } from 'vue';

    //------------------BARE DE VIE DU 1ER PERSONNAGE---------------------------------
    //barre de vie du 1 er personnage
    const life1 = ref("20");
    //couleur de la barre de vie du 1er personnage avec MAJ en fonction de son nombre de pv
    const bgColor1 = computed(() => {
        if (life1.value == 100){
            return "blue"}
        else if (life1.value > 50){
            return "lightGreen"}
        else if (life1.value > 20){
            return "orange"} 
        else return "red";
    });
    //propriété CCS de la barre de vie du 1er personnage
    const lifeProgress1 = computed(() => ({
    backgroundColor: bgColor1.value,
    width: life1.value + "%"
    }));

    //-----------------BARRE DE VIE DU 2EME PERSONNAGE---------------------------------------
    //barre de vie du 2eme personnage
    const life2 = ref("100");
    //couleur de la barre de vie du 2eme personnage avec MAJ en fonction de son nombre de PV
      const bgColor2 = computed(() => {
        if (life2.value == 100){
            return "blue"}
        else if (life2.value > 50){
            return "green"}
        else if (life2.value > 20){
            return "orange"} 
        else return "red";
    });
    //propriété CSS de la barre de vie du 2eme personnage
    const lifeProgress2 = computed(() => ({
    backgroundColor: bgColor2.value,
    width: life2.value + "%"
    }));
    //-------------------------------------------------------------------------
</script>

<style scoped>
    #life-bar{
        margin: 20px;
        width: 90vw;
        height: 20px;
        border: 2px solid grey;
        
    }

    
    #life-bar > div {
    height: 100%;     
    transition: width 1s ease;
    }

</style>