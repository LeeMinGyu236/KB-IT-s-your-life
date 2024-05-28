<template>
  <div>
    <h2>관심있는 K-pop가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem2.vue';
export default {
  name: 'App',
  components: { CheckboxItem },
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
