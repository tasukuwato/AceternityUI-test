"use client";

import { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4">ToDo List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter your task"
          />
          <button
            onClick={addTask}
            className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index} className="flex items-center justify-between p-2 border-b">
              <span
                className={`flex-1 ${t.completed ? "line-through" : ""}`}
                onClick={() => toggleTask(index)}
              >
                {t.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="ml-4 bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
