<script lang="ts">
import { defineComponent } from "vue";
import TimerControls from "../TimerControls/TimerControls.vue";
import { TTask } from "../../types/task";

export default defineComponent({
  name: "TaskForm",
  components: {
    TimerControls,
  },
  emits: ["add-task"],
  data() {
    return { isActive: false, task: "" };
  },
  methods: {
    onStartTask(payload: any) {
      this.isActive = payload.state;
    },
    onCompleteTask(payload: any) {
      this.isActive = payload.state;

      this.$emit("add-task", {
        description: this.task,
        time: payload.time,
      } as TTask);

      this.task = "";
    },
  },
});
</script>

<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de tarefas"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="task"
          :disabled="isActive"
        />
      </div>
      <TimerControls @timer-start="onStartTask" @timer-stop="onCompleteTask" />
    </div>
  </div>
</template>

<style scoped></style>
