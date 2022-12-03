<script lang="ts">
import { defineComponent } from "vue";
import { SideBar, TaskForm, TaskItem, BoxContainer } from "@components";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    TaskForm,
    TaskItem,
    BoxContainer,
  },
  data() {
    return {
      tasks: [] as TTask[],
      isDarkThemeActive: false,
    };
  },
  computed: {
    isTasksEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    addTask(task: TTask) {
      this.tasks.push(task);
    },
    switchTheme(state: boolean) {
      this.isDarkThemeActive = state;
    },
  },
});
</script>

<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ dark: isDarkThemeActive }"
  >
    <div class="column is-one-quarter">
      <SideBar @switch-theme="switchTheme" />
    </div>
    <div class="column is-three-quarter content">
      <TaskForm @add-task="(payload) => addTask(payload)" />
      <ul class="list">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
        <BoxContainer v-if="isTasksEmpty">
          <p>Você ainda não concluiu nenhuma tarefa.</p>
        </BoxContainer>
      </ul>
    </div>
  </main>
</template>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}

ul,
ol,
li {
  list-style: none;
}
</style>
