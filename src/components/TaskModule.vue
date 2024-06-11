<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="task in tasks"
        :key="task.id"
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <b-form-checkbox v-model="task.completed">
            <span :class="{ 'text-decoration-line-through': task.completed }">{{ task.title }}</span>
          </b-form-checkbox>
          <small>{{ task.description }}</small>
        </div>
        <span>{{ task.date }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'TaskModule',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Close off Case #012920',
          description: 'Closing off this case...',
          date: '12/06/2021',
          completed: false
        },
        {
          id: 2,
          title: 'Set up documentation report...',
          description: 'All Cases must include all payment transactions...',
          date: '14/06/2021',
          completed: false
        },
        {
          id: 3,
          title: 'Set up appointment with Dr Blake',
          description: 'No Description',
          date: '22/06/2021',
          completed: false
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
