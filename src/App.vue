<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <!-- <b-button @click="showInbox">Inbox</b-button>
          <b-button @click="showTask">Task</b-button> -->
        </b-col>
      </b-row>
    </b-container>
    <MessageModule v-if="showInboxModal" @close="closeModal('inbox')"/>
    <TaskModule v-if="showTaskModal" @close="closeModal('task')"/>
    <router-view/>
  </div>
</template>

<script>
import MessageModule from "./components/MessageModule";
import TaskModule from "./components/TaskModule";

export default {
  name: "App",
  components: {
    MessageModule,
    TaskModule
  },
  data() {
    return {
      showInboxModal: false,
      showTaskModal: false
    };
  },
  methods: {
    showInbox() {
      this.showInboxModal = true;
    },
    showTask() {
      this.showTaskModal = true;
    },
    closeModal(modal) {
      if (modal === "inbox") {
        this.showInboxModal = false;
      } else if (modal === "task") {
        this.showTaskModal = false;
      }
    }
  }
};
</script>

<style>
/* Any additional custom styles can go here */
</style>
