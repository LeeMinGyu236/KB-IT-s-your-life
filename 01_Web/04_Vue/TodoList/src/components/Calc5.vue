<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);
    watch(x, (currnet, old) => {
      console.log(`${old} -> ${currnet}`);
    });
    return { x, result };
  },
};
</script>
