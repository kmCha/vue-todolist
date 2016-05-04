<template>
  <li>
    {{ todo.value }}<input type="button" value="x" @click="deleteTodo(todo)">
  </li>
</template>

<script>
  import {deleteTodo} from "../vuex/actions.js";

  export default {
    props: [
      'todo'
    ],
    vuex: {
      actions: {
        deleteTodo
      }
    }
  }
</script>
