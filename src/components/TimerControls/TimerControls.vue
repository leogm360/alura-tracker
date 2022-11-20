<script lang="ts">
import { defineComponent } from "vue";
import TimerMarker from "../TimerMarker/TimerMarker.vue";
import ControlButton from "../ControlButton/ControlButton.vue";

const ONE_SECOND = 1000;

export default defineComponent({
  name: "TimerControls",
  components: {
    TimerMarker,
    ControlButton,
  },
  data() {
    return { elapsedTime: 0, timeInterval: 0, isActive: false };
  },
  emits: ["timer-start", "timer-stop"],
  methods: {
    startTimer() {
      this.isActive = true;

      this.$emit("timer-start", { state: true });

      this.timeInterval = setInterval(() => {
        this.elapsedTime += 1;
      }, ONE_SECOND);
    },
    stopTimer() {
      this.isActive = false;

      this.$emit("timer-stop", { state: false, time: this.elapsedTime });

      this.elapsedTime = 0;

      clearInterval(this.timeInterval);
    },
  },
});
</script>

<template>
  <div class="column">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <TimerMarker :elapsedTime="elapsedTime" />
      <ControlButton
        icon="fas fa-play"
        text="Play"
        @clicked="startTimer"
        :disabled="isActive"
      />
      <ControlButton
        icon="fas fa-stop"
        text="Stop"
        @clicked="stopTimer"
        :disabled="!isActive"
      />
    </div>
  </div>
</template>

<style scoped></style>
