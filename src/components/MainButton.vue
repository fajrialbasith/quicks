<template>
  <button @click="toggle">Show Buttons</button>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$emit('toggle-buttons');
    },
  },
};
</script>
