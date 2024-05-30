<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">::Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoList
          :todolist="todolist"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    InputTodo,
  },
  data() {
    return {
      todolist: [
        { id: Date.now(), todo: '자전거 타기', completed: false },
        { id: Date.now() + 1, todo: '딸과 농구', completed: true },
        { id: Date.now() + 2, todo: '일요일 애견 카페', completed: false },
        { id: Date.now() + 3, todo: 'Vue 원고집필', completed: false },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todolist.push({
          id: Date.now() + Math.random(), // 타임스탬프와 랜덤 숫자를 조합하여 고유 ID 생성
          todo: todo,
          completed: false,
        });
      }
    },
    deleteTodo(id) {
      this.todolist = this.todolist.filter((item) => item.id !== id);
    },
    toggleCompleted(id) {
      const todo = this.todolist.find((item) => item.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
};
</script>
