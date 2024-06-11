<template>
    <div>
      <button @click="showInbox">Inbox</button>
      <button @click="showTask">Task</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showInbox() {
        this.$emit('show-inbox');
      },
      showTask() {
        this.$emit('show-task');
      },
    },
  };
  </script>
    