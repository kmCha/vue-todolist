<template>
  <div class="app">
    <header>
      <h1>Todos</h1>
      <sub>({{selectedFilter}})</sub>
    </header>
    <div class="input-wrap">
        <input class="input-todo" type="text" placeholder="输入todo" maxlength="10" autofocus @keyup.enter="tryAddTodo">
    </div>
    <ul class="todo-list">
      <todo v-for="todo in filteredTodos" transition="animate" :todo="todo"></todo>
    </ul>
    <footer>
      <ul>
        <li v-for="(key, value) in filters">
          <a href="javascript: void(0);" @click="selectedFilter=key">
            {{capitalize(key)}}
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import Todo from "./Todo.vue";
  import store from "../vuex/store";
  import {addTodo} from "../vuex/actions.js";
  import {todos} from "../vuex/getters.js";

  const filters = {
    "all": todos => todos,
    "active": todos => todos.filter(todo => !todo.done),
    "finished": todos => todos.filter(todo => todo.done)
  };

  export default {
    components: {
      Todo
    },
    data() {
      return {
        selectedFilter: "all",
        filters
      }
    },
    computed: {
      filteredTodos() {
        return this.filters[this.selectedFilter](this.todos);
      }
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
      },
      capitalize(key) {
        return key.replace(/^\w/, letter => letter.toUpperCase());
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
input:focus {
  outline: none;
}
header {
  width: 15em;
  margin: 0 auto;
  text-align: center;
  color: #eb8888;
  padding: 20px 0;
  background: #ffefee;
}
.todo-list {
  list-style-type: none;
  padding-left: 0px;
  width: 15em;
  margin: 0 auto;
}
.input-wrap {
  width: 15em;
  margin: 0 auto;
}
.input-todo {
  font-size: 1.2em;
  width: 100%;
  border: none;
  border-bottom: 1px solid #aaa;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.05);
  text-align: center;
  padding: 10px 0;
}
.animate-transition {
  padding: 0.4em;
  transition: all 0.5s ease;
}
.animate-enter, .animate-leave {
  padding: 0.4em 0 0.4em 2em;
  opacity: 0;
}
footer {
  width: 15em;
  margin: 0 auto;
}
footer ul {
  padding: 0;
  text-align: center;
}
footer li {
  list-style: none;
  display: inline-block;
  margin: 5px 10px;
  border: 1px #eb8888 solid;
  border-radius: 0.5em;
  padding: 2px 5px;
  transition: all 0.5s ease;
}
footer li a {
  text-decoration: none;
  color: #eb8888;
}
footer li:hover {
  background-color: #ffefee;
}
</style>
