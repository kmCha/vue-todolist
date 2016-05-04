import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: JSON.parse(localStorage.getItem("vue-todolist")) || []
};

const mutations = {
  ADDTODO(state, todo) {
    state.todos.push(todo);
    updataLocalStorage(state);
  },
  DELETETODO(state, todo) {
    state.todos.$remove(todo);
    updataLocalStorage(state);
  }
};

function updataLocalStorage(state) {
  localStorage.setItem("vue-todolist", JSON.stringify(state.todos));
}

export default new Vuex.Store({
  state,
  mutations
});
