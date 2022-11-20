<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ControlButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  emits: ["clicked"],
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
});
</script>

<template>
  <button class="button" @click="clicked" :disabled="disabled">
    <span class="icon">
      <i :class="icon"></i>
    </span>
    <span>{{ text }}</span>
  </button>
</template>

<style scoped></style>
