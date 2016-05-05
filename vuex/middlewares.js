const localStorageMW = {
  onMutation(mutation, state) {
    localStorage.setItem("vue-todolist", JSON.stringify(state.todos));
  }
};

export default [localStorageMW];
