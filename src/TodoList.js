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








































}