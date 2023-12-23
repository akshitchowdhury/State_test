import React, { useState } from 'react';

const TodoList = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to manage the input value for adding tasks
  const [taskInput, setTaskInput] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to toggle the completion status of a task
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      
      {/* Input for adding new tasks */}
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
