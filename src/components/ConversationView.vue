<template>
  <div v-if="conversation">
    <h2>{{ conversation.title }}</h2>
    <p>Participants: {{ conversation.participants }}</p>
    <div v-for="msg in conversation.messages" :key="msg.id" class="message-item">
      <p>{{ msg.content }}</p>
      <small>{{ msg.date }}</small>
      <div class="message-actions">
        <button @click="toggleActions">...</button>
        <div v-if="showActions" class="actions-popup">
          <button @click="editMessage">Edit</button>
          <button @click="deleteMessage">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationView',
  props: ['conversation'],
  data() {
    return {
      showActions: false,
    };
  },
  methods: {
    toggleActions() {
      this.showActions = !this.showActions;
    },
    editMessage() {
    },
    deleteMessage() {
    },
  },
};
</script>

<style>
.message-item {
  position: relative;
}
.message-actions {
  position: absolute;
  right: 10px;
  top: 5px;
}
.actions-popup {
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #ccc;
  position: absolute;
  top: 20px;
  right: 0;
}
.actions-popup button {
  border: none;
  background: none;
  padding: 5px;
  cursor: pointer;
}
.actions-popup button:hover {
  background: #f0f0f0;
}
</style>
