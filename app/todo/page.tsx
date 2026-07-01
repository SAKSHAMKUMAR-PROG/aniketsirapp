"use client";

import { type FormEvent, useState } from "react";

function TODO() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = task.trim();

    if (!newTask) {
      return;
    }

    setTodos([...todos, newTask]);
    setTask("");
  };
  const clear = () => {
    setTodos([]);
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black-100 px-4">
      <div className="w-full max-w-md bg-white border border-black-200 rounded-xl p-8">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          Todo List
        </h1>

        <form onSubmit={addTodo} className="flex gap-3">
          <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Enter todo"
            className="flex-1 border border-black-300 rounded-lg px-4 py-3 text-black outline-none focus:border-green-500"
          />

          <button
            type="submit"
            className="bg-red-500 text-white font-bold px-6 rounded-lg hover:bg-red-600"
          >
            Add
          </button>
        </form>

        <button
          onClick={clear}
          className="bg-gray-300 px-8 py-3 rounded-xl text-xl font-bold hover:bg-gray-400 mt-10"
        >
          clear
        </button>

        <ul className="mt-6 space-y-3">
          {todos.map((todo, index) => (
            <li
              key={`${todo}-${index}`}
              className="border border-black-200 rounded-lg px-4 py-3 text-black"
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TODO;
