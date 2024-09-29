import React, { useState } from 'react';

const TodoList = ({ filter }) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    const taskToDelete = tasks.find(task => task.id === id);
    setDeletedTasks([...deletedTasks, taskToDelete]);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
    setDeletedTasks([]);
  };

  const renderTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed).map(task => (
        <li key={task.id}>
          <span className="completed">{task.text}</span>
        </li>
      ));
    } else if (filter === 'deleted') {
      return deletedTasks.map(task => (
        <li key={task.id}>
          <span className="deleted">{task.text}</span>
        </li>
      ));
    } else { 
      return tasks.filter(task => !task.completed).map(task => (
        <li key={task.id}>
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ));
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <span className='glowing'>Click on the item to complete the task</span>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={clearAllTasks} className="clear-button">Clear All Tasks</button>

      <ul>
        {renderTasks()}
      </ul>
    </div>
  );
};

export default TodoList;
