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
import { defineProps } from 'vue'

// Receive log from parent component
const props = defineProps({
  log: {
    type: Array,
    default: () => []
  }
})
</script>
