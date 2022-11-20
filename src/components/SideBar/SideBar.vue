<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  emits: ["switch-theme"],
  data() {
    return {
      isDarkThemeActive: false,
    };
  },
  computed: {
    themeText(): string {
      if (this.isDarkThemeActive) {
        return "Desativar modo escuro";
      }

      return "Ativar modo escuro";
    },
  },
  methods: {
    theme() {
      this.isDarkThemeActive = !this.isDarkThemeActive;

      this.$emit("switch-theme", this.isDarkThemeActive);
    },
  },
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
    <button class="button" @click="theme">{{ themeText }}</button>
  </header>
</template>

<style scoped>
header {
  background-color: #0d3b86;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
