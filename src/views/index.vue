<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <div class="main">
      <HelloWorld />
    </div>

    <button @click="$router.push('/home')">Home</button>
    <button @click="$router.push('/about')">About</button>
  </main>
</template>
<style lang="scss">
.main {
  color: red;
}
</style>
