<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
});
</script>

<template>
  <header>
    <h1>
      <img
        src="../../assets/images/alura-tracker-logo.webp"
        alt="Alura Tracker - Rastreie seu tempo de forma inteligente"
      />
    </h1>
  </header>
</template>

<style scoped>
header {
  background-color: #0d3b86;
  width: 100%;
  height: 100vh;
  padding: 1rem;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
