<template>
  <div class="text-center mt-5">
    <b-button @click="showInbox">Inbox</b-button>
    <b-button @click="showTask">Task</b-button>

    <!-- Modals -->
    <b-modal ref="messageModal" id="message-modal" title="Inbox" hide-footer>
      <MessageModule @close="hideInbox" />
    </b-modal>
    <b-modal ref="taskModal" id="task-modal" title="Tasks" hide-footer>
      <TaskModule @close="hideTask" />
    </b-modal>
  </div>
</template>

<script>
import MessageModule from '@/components/MessageModule.vue';
import TaskModule from '@/components/TaskModule.vue';

export default {
  name: 'HomeView',
  components: {
    MessageModule,
    TaskModule
  },
  methods: {
    showInbox() {
      this.$refs.messageModal.show();
    },
    hideInbox() {
      this.$refs.messageModal.hide();
    },
    showTask() {
      this.$refs.taskModal.show();
    },
    hideTask() {
      this.$refs.taskModal.hide();
    }
  }
};
</script>
