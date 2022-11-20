<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxContainer",
});
</script>

<template>
  <li class="box has text-weight-bold">
    <slot></slot>
  </li>
</template>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
