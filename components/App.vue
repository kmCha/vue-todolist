<template>
  <div class="app">
    <div class="input-wrap">
        <input class="input-todo" type="text" placeholder="输入todo" maxlength="10" autofocus @keyup.enter="tryAddTodo">
    </div>
    <ul class="todo-list">
      <todo v-for="todo in todos" transition="animate" :todo="todo"></todo>
    </ul>
  </div>
</template>

<script>
  import Todo from "./Todo.vue";
  import store from "../vuex/store";
  import {addTodo} from "../vuex/actions.js";
  import {todos} from "../vuex/getters.js";

  export default {
    components: {
      Todo
    },
    store,
    methods: {
      tryAddTodo(e) {
        var value = e.target.value.trim();
        if(value) {
          this.addTodo({
            value,
            done: false
          });
          e.target.value = "";
        }
      }
    },
    vuex: {
      actions: {
        addTodo
      },
      getters: {
        todos
      }
    }
  };
</script>

<style>
.todo-list {
  list-style-type: none;
  padding-left: 0px;
  width: 10em;
  margin: 0 auto;
}
.input-wrap {
  width: 10em;
  margin: 0 auto;
}
.input-todo {
  width: 100%;
  border: none;
  border-bottom: 1px solid;
  text-align: center;
}
.animate-transition {
  transition: all 0.5s ease;
  height: 10px;
  padding: 5px;
}
.animate-enter, .animate-leave {
  height: 0;
  padding: 0 5px;
  opacity: 0;
}
</style>
