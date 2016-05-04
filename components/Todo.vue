<template>
  <li>
    <input class="toggle-todo" type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" :class="{'done': todo.done}">
    <span class="value-todo">{{ todo.value }}</span>
    <input type="button" value="x" @click="deleteTodo(todo)">
  </li>
</template>

<script>
  import {deleteTodo, toggleTodo} from "../vuex/actions.js";

  export default {
    props: [
      'todo'
    ],
    vuex: {
      actions: {
        deleteTodo,
        toggleTodo
      }
    }
  }
</script>

<style>
.value-todo {
  transition: all 0.5s ease;
}
.toggle-todo.done + .value-todo {
  text-decoration: line-through;
  color: grey;
}
</style>
