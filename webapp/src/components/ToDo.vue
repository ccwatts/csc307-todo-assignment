<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="onToggle" />
    <b-button type="is-danger" size="is-small" outlined>Delete</b-button>
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
      this.$store.dispatch('toggleToDo', this.todo.id, checked);
    }
  }
};
</script>
