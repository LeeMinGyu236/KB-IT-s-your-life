<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('check-change', { id, checked: $event.target.checked })"
    />
    <span
      v-if="checked === true"
      style="color: blue; text-decoration: underline"
    >
      <i>{{ label }}</i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox1',
  props: ['id', 'checked', 'label'],
};
</script>
