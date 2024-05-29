<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할 일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <button class="btn btn-primary" @click="addTodoHandler">추가</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return { todo: '' };
  },
  emits: ['add-todo'],
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        this.$emit('add-todo', this.todo);
        this.todo = '';
      }
    },
  },
};
</script>

<style scoped>
.input-group {
  display: flex;
}
.form-control {
  flex: 1;
}
</style>
