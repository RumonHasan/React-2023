import { createSlice } from '@reduxjs/toolkit';
// create slice uses immer js that does not mutate the state
// immer js means return a new value or modify the existing draft but both cannot be done
const generalSlices = createSlice({
  name: 'general',
  initialState: {
    todos: [
      {
        id: 1,
        name: 'rumon',
        age: 26,
        editCounter: 3,
        disableEditButton: false,
      },
      {
        id: 2,
        name: 'Kabin',
        age: 25,
        editCounter: 3,
        disableEditButton: false,
      },
    ],
  },
  // reducers in react follow the immer js pattern when writing functions
  reducers: {
    // adding a basic todo
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push(newTodo); // direct addition without any return
      return state;
    },
    // deleting a single todo
    deleteTodo(state, action) {
      const { id } = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
      return state;
    },
    // added a edit function by setting some edit limit
    editTodo(state, action) {
      const { id, newInput } = action.payload;
      state.todos = state.todos.map((item) =>
        item.id === id
          ? { ...item, name: newInput, editCounter: item.editCounter - 1 }
          : item
      );
      return state;
    },
    // button controsl for disbale and enabling things
    buttonStateControls(state, action) {
      const { buttonType, id } = action.payload;
      switch (buttonType) {
        case 'editDisable':
          state.todos = state.todos.map((item) =>
            item.id === id
              ? { ...item, disableEditButton: !item.disableEditButton }
              : item
          );
          break;
      }
    },
  },
});
// slice actions for peripheral functions for CRUD operations
export const { addTodo, deleteTodo, editTodo, buttonStateControls } =
  generalSlices.actions;

export default generalSlices.reducer;
