<template>
  <li>
    {{ todo.value }}<input type="button" value="x" @click="deleteTodo(todo)">
  </li>
</template>

<script>
  export default {
    props: [
      'todo'
    ],
    data() {
      return {
        msg: "hello sb"
      }
    },
    methods: {
      deleteTodo(todo) {
        this.$dispatch('delete-todo', todo);
      }
    }
  }
</script>
