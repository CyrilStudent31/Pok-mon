<template>

  <div v-if="winner !== null" class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
    <div class="card text-center shadow-lg" style="max-width: 400px;">
      <div class="card-body">
        <h1 class="card-title display-5 fw-bold">
          <span v-if="winner === 'adversaire'" class="text-danger">PERDU</span>
          <span v-else-if="winner === 'joueur'" class="text-success">VICTOIRE</span>
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
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  vieJoueur: {
    type: Number,
    required: true
  },
  vieAdversaire: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['reset-game'])

const winner = computed(() => {
  const jDead = props.vieJoueur <= 0
  const aDead = props.vieAdversaire <= 0

  if (jDead && aDead) {
    return 'egalite'
  } else if (jDead) {
    return 'adversaire'
  } else if (aDead) {
    return 'joueur'
  } else {
    return null
  }
})

function resetPartie() {
  emit('reset-game')
}
</script>
