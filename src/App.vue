<script setup lang="ts">
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue';
import Step1 from './views/Step1.vue'
import Step2 from './views/Step2.vue'
import Step3 from './views/Step3.vue';
</script>

<template>
    <Header />
    <HelloWorld msg="Vite + Vue" v-if="0" />
    <Home v-if="0" />
    <Step1 v-if="1" />
    <Step2 v-if="0" />
    <Step3 v-if="0" />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
