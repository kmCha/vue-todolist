<template>
  <div class="app">
    <input type="text" placeholder="输入todo" autofocus @keyup.enter="tryAddTodo">
    <ul>
      <todo v-for="todo in todos" :todo="todo"></todo>
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
            value
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
