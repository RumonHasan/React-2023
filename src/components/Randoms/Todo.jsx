import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
  buttonStateControls,
} from '../../store/slices';
import { toggleTheme } from '../../store/themeSlice';
import { nanoid } from '@reduxjs/toolkit';
import supabase from '../../database/supabase';

export const Todo = () => {
  const todos = useSelector((state) => state.generalReducer.todos);
  const currentTheme = useSelector(
    (state) => state.themeReducer.themeState.state
  );
  console.log(currentTheme);
  const dispatchControl = useDispatch();
  const [input, setInput] = useState('');
  const [submitButtonState, setSubmitButtonState] = useState(false);
  const [editId, setEditId] = useState('');
  const [data, setData] = useState('');

  // fetching data from supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('todos').select('*');
      if (data) {
        setData(data);
      } else {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // edit todo function
  const editTodoFunction = (editId, inputVal, editLimit) => {
    // checks for edit limit and disables or enables edit button if the editCounter hits 0 viceversa
    if (editLimit < 1) {
      alert('exceeded edit limit');
      dispatchControl(
        buttonStateControls({
          buttonType: 'editDisable',
          id: editId,
        })
      );
    } else {
      setSubmitButtonState(true);
      setEditId(editId);
      setInput(inputVal);
    }
  };
  // handles delete function
  const deleteFunction = (id) => {
    try {
      dispatchControl(
        deleteTodo({
          id: id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // add function using redux dispatch
  const handleAddSomething = () => {
    try {
      if (!submitButtonState && input) {
        dispatchControl(
          addTodo({
            id: nanoid(),
            name: input,
            age: 30,
            editCounter: 3,
            disableEditButton: false,
          })
        );
        setInput('');
      }
      if (submitButtonState && input) {
        dispatchControl(
          editTodo({
            id: editId,
            newInput: input,
          })
        );
        setEditId('');
        setInput('');
        setSubmitButtonState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ background: !currentTheme ? 'black' : 'blue' }}>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.name}{' '}
              <button onClick={() => deleteFunction(todo.id)}>
                Delete Todo
              </button>
              {!todo.disableEditButton && (
                <button
                  onClick={() =>
                    editTodoFunction(todo.id, todo.name, todo.editCounter)
                  }
                >
                  editTodo
                </button>
              )}
              editCounter: {todo.editCounter}
            </li>
          );
        })}
      </ul>
      <div style={{ display: 'flex' }}>
        <input
          placeholder="Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleAddSomething()}>
          {submitButtonState ? 'Edit' : 'Add'}
        </button>
        <button onClick={() => dispatchControl(toggleTheme())}>
          Switch Theme
        </button>
      </div>
    </div>
  );
};
