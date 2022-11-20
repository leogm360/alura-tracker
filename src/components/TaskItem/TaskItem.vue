<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimerMarker from "../TimerMarker/TimerMarker.vue";
import { TTask } from "../../types/task";

export default defineComponent({
  name: "TaskItem",
  components: {
    TimerMarker,
  },
  props: {
    task: {
      type: Object as PropType<TTask>,
      required: true,
    },
  },
});
</script>

<template>
  <li class="box has text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        <p>{{ task.description }}</p>
      </div>
      <div class="column">
        <TimerMarker :elapsed-time="task.time" />
      </div>
    </div>
  </li>
</template>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
