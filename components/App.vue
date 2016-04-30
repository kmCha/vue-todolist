<template>
  <div class="app">
    {{msg}}
    <br>
    <input type="text" v-model="msg" autofocus @keyup.enter="addTodo">
    <ul>
      <todo v-for="todo in todos" :todo="todo"></todo>
    </ul>
  </div>
</template>

<script>
  import Todo from "./Todo.vue";

  export default {
    components: {
      Todo
    },
    data() {
      var todos = JSON.parse(localStorage.getItem("vue-todolist")) || [];
      return {
        msg: "hello sb",
        todos
      }
    },
    methods: {
      addTodo(e) {
        var value = e.target.value.trim();
        if(value) {
          this.todos.push({
            value
          });
          e.target.value = "";
          localStorage.setItem("vue-todolist", JSON.stringify(this.todos));
        }
      }
    },
    events: {
      'delete-todo'(todo) {
        this.todos.$remove(todo);
        localStorage.setItem("vue-todolist", JSON.stringify(this.todos));
      }
    }
  };
</script>
