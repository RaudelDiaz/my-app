import React, { useState } from 'react';
import TodoList from './TodoList';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('uncompleted');

  return (
    <div className="App">
      <Navbar setFilter={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
};

export default App;

