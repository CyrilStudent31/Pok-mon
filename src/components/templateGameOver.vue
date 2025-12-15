<template>

  <div v-if="winner !== null" class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
    <div class="card text-center shadow-lg" style="max-width: 400px;">
      <div class="card-body">
        <h1 class="card-title display-5 fw-bold">
          <span v-if="winner === 'adversaire'" class="text-danger">Votre adversaire a gagné</span>
          <span v-else-if="winner === 'joueur'" class="text-success">Vous avez gagné</span>
          <span v-else class="text-warning">ÉGALITÉ</span>
        </h1>
        <p class="card-text">
          Joueur : {{ vieJoueur }} HP · Adversaire : {{ vieAdversaire }} HP
        </p>
        <button class="btn btn-primary mt-3" @click="resetPartie">
          Rejouer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const vieJoueur = ref(100)
const vieAdversaire = ref(100)
const winner = ref(null)

watchEffect(() => {
  const jDead = vieJoueur.value <= 0
  const aDead = vieAdversaire.value <= 0

  if (jDead && aDead) {
    winner.value = 'egalite' //ou aucun
  } else if (jDead) {
    winner.value = 'adversaire'
  } else if (aDead) {
    winner.value = 'joueur'
  } else {
    winner.value = null
  }
})

function resetPartie() {
  vieJoueur.value = 100
  vieAdversaire.value = 100
  winner.value = null
}
</script>
