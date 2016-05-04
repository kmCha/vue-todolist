
export function addTodo(store, todo) {
  store.dispatch("ADDTODO", todo);
};
export function deleteTodo(store, todo) {
  store.dispatch("DELETETODO", todo);
  console.log("haha");
};
