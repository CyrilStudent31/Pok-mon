<template>
  <div class="mb-3">
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dmgAttA = ref(0)
const dmgAttP = ref(0)
const PvPlayer = ref(100)
const PvAdversaire = ref(100)
const log = ref([])

const attackPlayer = () => {
    const damage = Math.floor(Math.random() * 15) + 10
    if (damage < PvPlayer.value) {
        PvPlayer.value = PvPlayer.value - damage;
    } else {
        PvPlayer.value = 0;
    }
    log.value.push(`Joueur Attaque : -${damage} pts`)
}

const attaqueAdversaire = () => {
    const damage = Math.floor(Math.random() * 15)
    if (damage < PvAdversaire.value) {
        PvAdversaire.value = PvAdversaire.value - damage;
    } else {
        PvAdversaire.value = 0;
    }
    log.value.push(`Monstre Attaque : -${damage} pts`)
}

const attaqueAdversaireSpe = () => {
    const damage = Math.floor(Math.random() * 15) + 5
    if (damage < PvAdversaire.value) {
        PvAdversaire.value = PvAdversaire.value - damage;
    } else {
        PvAdversaire.value = 0;
    }
    log.value.push(`Monstre Attaque Spéciale : -${damage} pts`)
}

// Export functions to make them available for other components
defineExpose({
    attackPlayer,
    attaqueAdversaire,
    attaqueAdversaireSpe,
    PvPlayer,
    PvAdversaire,
    log
})
</script>