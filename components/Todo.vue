<template>
  <li class="todo">
    <div class="wrap-todo">
      <input class="toggle-todo" type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" :class="{'done': todo.done}">
      <span class="value-todo">{{ todo.value }}</span>
    </div>
    <input class="delete-todo" type="button" value="x" @click="deleteTodo(todo)">
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
.todo {
  border-bottom: 1px solid #aaa;
  overflow: hidden;
  position: relative;
  /*padding: 50px;*/
}
.wrap-todo {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}
.value-todo {
  line-height: 1.5em;
  transition: all 0.5s ease;
  color: #333;
}
.toggle-todo.done + .value-todo {
  text-decoration: line-through;
  color: grey;
}
.delete-todo {
  visibility: hidden;
  /*padding: 0.2em;*/
  font-size: 1.6em;
  float: right;
  border: none;
  background-color: transparent;
  line-height: 1.5em;
  color: #eb8888;
}
.todo:hover .delete-todo {
  visibility: visible;
}
</style>
