<template>
  <li class="todo">
    <div :class="{'wrap-todo': true, 'done': todo.done}">
      <div class="toggle-wrap" @click="toggleTodo(todo)">
        <input id="toggle-{{index}}" class="toggle-todo" type="checkbox" :checked="todo.done" @click.stop.prevent>
        <label for="toggle-{{index}}"></label>
      </div>
      <span class="value-todo">{{ todo.value }}</span>
    </div>
    <input class="delete-todo" type="button" value="x" @click="deleteTodo(todo)">
  </li>
</template>

<script>
  import {deleteTodo, toggleTodo} from "../vuex/actions.js";

  export default {
    props: [
      'todo',
      'index'
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
  padding-left: 0.5em;
  line-height: 1.5em;
  transition: all 0.5s ease;
  color: #333;
}
.done .value-todo {
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
.toggle-todo {
  visibility: hidden;
}
.toggle-wrap {
  position: relative;
  height: 22px;
  width: 22px;
  border-radius: 3px;
  background-color: #eb8888;
}
.toggle-wrap:hover {
  cursor: pointer;
}
.done .toggle-wrap {
  background-color: #88eb88;
}
.toggle-wrap::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 8px;
  height: 1px;
  width: 5px;
  background-color: #fff;
}
.toggle-wrap::after {
  content: "";
  position: absolute;
  top: 14px;
  left: 9px;
  height: 4px;
  width: 4px;
  border-radius: 100%;
  background-color: #fff;
}
.toggle-wrap label {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 9px;
  width: 18px;
  background-color: #fff;
  border: 2px solid #eb8888;
  transition: all 0.5s ease;
  border-radius: 3px;
  cursor: pointer;
  z-index: 2;
}
.done .toggle-wrap label {
  border: 2px solid #88eb88;
}
.toggle-todo:checked + label {
    top: 11px;
}

</style>
