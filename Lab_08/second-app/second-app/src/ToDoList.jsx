import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  // Define state for tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Handle task completion toggle
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handle task deletion
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle task editing
  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index].text);
  };

  // Handle edit input change
  const handleEditInputChange = (e) => {
    setEditingText(e.target.value);
  };

  // Handle edit form submission
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText('');
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todo-input"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit" className="todo-button">Add Task</button>
      </form>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {editingIndex === index ? (
              <form onSubmit={handleEditFormSubmit}>
                <input
                  type="text"
                  className="edit-input"
                  value={editingText}
                  onChange={handleEditInputChange}
                />
                <button type="submit" className="edit-button">Save</button>
              </form>
            ) : (
              <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            )}
            {editingIndex !== index && (
              <>
                <button onClick={() => handleEditTask(index)} className="edit-button">Edit</button>
                <button onClick={() => handleDeleteTask(index)} className="delete-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
