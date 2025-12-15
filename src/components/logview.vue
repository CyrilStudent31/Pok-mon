<template>
  <div class="mt-4">
    <h5>Battle Log</h5>
    <ul class="list-group">
      <li v-for="(entry, index) in log" :key="index" class="list-group-item">
        {{ entry }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCombatStore } from '@/stores/combatStore'

// On récupère le log depuis le store
const { log } = storeToRefs(useCombatStore())
</script>
