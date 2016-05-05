
export function addTodo(store, todo) {
  store.dispatch("ADDTODO", todo);
};
export function deleteTodo(store, todo) {
  store.dispatch("DELETETODO", todo);
};
export function toggleTodo(store, todo) {
  store.dispatch("TOGGLETODO", todo);
};
export function updateTodo(store, todo, value) {
  store.dispatch("UPDATATODO", todo, value);
}
