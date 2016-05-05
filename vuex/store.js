import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from "../vuex/middlewares.js"

Vue.use(Vuex);

const state = {
  todos: JSON.parse(localStorage.getItem("vue-todolist")) || []
};

const mutations = {
  ADDTODO(state, todo) {
    state.todos.push(todo);
  },
  DELETETODO(state, todo) {
    state.todos.$remove(todo);
  },
  TOGGLETODO(state, todo) {
    todo.done = !todo.done;
  },
  UPDATATODO(state, todo, value) {
    todo.value = value;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  middlewares
});
