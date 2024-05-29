<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">::Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoList
          :todoList="todolist"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import InputTodo from '../components/InputTodo.vue';

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
          id: new Date().getTime(),
          todo: todo,
          completed: false,
        });
      }
    },
    deleteTodo(id) {
      let index = this.todolist.findIndex((item) => id === item.id);
      this.todolist.splice(index, 1);
    },
    toggleCompleted(id) {
      let index = this.todolist.findIndex((item) => id === item.id);
      this.todolist[index].completed = !this.todolist[index].completed;
    },
  },
};
</script>
