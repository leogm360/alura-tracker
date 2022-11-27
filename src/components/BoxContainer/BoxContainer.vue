<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxContainer",
  data() {
    return {
      box: {
        background: "#faf0ca",
      },
    };
  },
});
</script>

<template>
  <li class="box has text-weight-bold" :style="box">
    <slot></slot>
  </li>
</template>
