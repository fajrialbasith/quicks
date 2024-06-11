<template>
  <div>
    <b-form-input v-model="searchQuery" placeholder="Search" class="mb-3"></b-form-input>
    <b-spinner v-if="loading" small></b-spinner>
    <b-list-group v-else>
      <b-list-group-item
        v-for="message in filteredMessages"
        :key="message.id"
        @click="openConversation(message)"
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <div>{{ message.title }}</div>
          <small>{{ message.sender }}</small>
        </div>
        <span v-if="message.new" class="badge badge-danger">New</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'MessageModule',
  data() {
    return {
      loading: true,
      messages: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredMessages() {
      return this.messages.filter(message =>
        message.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    fetchMessages() {
      this.$http
        .get('https://dummyapi.io/data/api/message')
        .then(response => {
          this.messages = response.data.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    openConversation(message) {
      this.$emit('openConversation', message);
    },
    closeModal() {
      this.$emit('close');
    }
  },
  created() {
    this.fetchMessages();
  }
};
</script>
