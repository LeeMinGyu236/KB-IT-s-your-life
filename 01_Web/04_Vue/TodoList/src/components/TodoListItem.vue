<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @delete-todo="$emit('delete-todo', $event)"
          @toggle-completed="$emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoListItem',
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },
  emits: ['delete-todo', 'toggle-completed'],
};
</script>
