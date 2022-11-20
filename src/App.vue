<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar/SideBar.vue";
import TaskForm from "./components/TaskForm/TaskForm.vue";
import TaskItem from "./components/TaskItem/TaskItem.vue";
import { TTask } from "./types/task";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    TaskForm,
    TaskItem,
  },
  data() {
    return {
      tasks: [] as TTask[],
    };
  },
  methods: {
    addTask(task: TTask) {
      this.tasks.push(task);
    },
  },
});
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <TaskForm @add-task="(payload) => addTask(payload)" />
      <ul class="list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
      </ul>
    </div>
  </main>
</template>

<style>
.list {
  padding: 1.25rem;
}
</style>
