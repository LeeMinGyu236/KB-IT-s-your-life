<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div @click="toggleCompleted">
      <input
        type="checkbox"
        :checked="todoItem.completed"
        class="form-check-input me-1"
      />
      <span :class="{ 'text-decoration-line-through': todoItem.completed }">
        {{ todoItem.todo }}
      </span>
    </div>
    <button class="btn btn-danger btn-sm" @click="deleteTodo">삭제</button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  todoItem: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['toggle-completed', 'delete-todo']);

const toggleCompleted = () => {
  emit('toggle-completed', props.todoItem.id);
};

const deleteTodo = () => {
  emit('delete-todo', props.todoItem.id);
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
