/* eslint-disable */
import React from 'react';
import './App.css';
import Pagination from './components/Randoms/Pagination';
import { Todo } from './components/Randoms/Todo';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Todo />
      </div>
    </React.Fragment>
  );
}

export default App;
