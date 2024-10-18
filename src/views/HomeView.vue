<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <HelloWorld />
    <button @click="$router.push('/about')">About</button>
  </main>
</template>
