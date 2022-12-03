<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TimerMarker, BoxContainer } from "@components";

export default defineComponent({
  name: "TaskItem",
  components: {
    TimerMarker,
    BoxContainer,
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
  <li>
    <BoxContainer>
      <div class="columns">
        <div class="column is-7">
          <p>{{ task.description || "Tarefa sem descrição" }}</p>
        </div>
        <div class="column">
          <TimerMarker :elapsed-time="task.time" />
        </div>
      </div>
    </BoxContainer>
  </li>
</template>

<style scoped></style>
