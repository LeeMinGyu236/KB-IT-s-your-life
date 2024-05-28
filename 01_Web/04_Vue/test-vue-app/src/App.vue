<script>
import CheckboxItem from './components/CheckboxItem.vue';
export default {
  name: 'App',
  component: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: 'bts', checked: true },
        { id: 2, name: 'black pink', checked: false },
        { id: 3, name: 'ITZY', checked: false },
        { id: 4, name: 'EXO', checked: false },
      ],
    };
  },
};
</script>

<template>
  <div>
    <h3>관심있는 KPOP 가수?</h3>
    <hr />
    <ul>
      <CheckboxItem
        v-for="idol in idols"
        :name="idol.name"
        :key="idol.checked"
      />
    </ul>
  </div>
</template>
