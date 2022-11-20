<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimerMarker",
  props: {
    elapsedTime: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    timer(): string {
      return new Date(this.elapsedTime * 1000).toISOString().substring(11, 19);
    },
  },
});
</script>

<template>
  <section>
    <strong>{{ timer }}</strong>
  </section>
</template>

<style scoped></style>
