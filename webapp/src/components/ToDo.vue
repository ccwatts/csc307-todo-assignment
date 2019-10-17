<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="onToggle" />
    <b-button type="is-danger" size="is-small" outlined v-on:click="onDeletePress">Delete</b-button>
    <span class="todo-title">
      {{ todo.title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    onToggle(checked) {
      // persistState should be enough; toggleToDo no longer exists, so be careful if this is uncommented
      // this.$store.dispatch('toggleToDo', this.todo.id, checked);
      this.$store.dispatch('persistState');
    },
    onDeletePress() {
      this.$store.dispatch('deleteToDo', this.todo);
    }
  }
};
</script>
