import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    const obj = {
      id: Date.now(),
      todo: inputValue,
      completed: false,
    };
    setTodos((p) => [...p, obj]);
    setInputValue("");
  };
  const handleRemoveTodo = (id) => {
    console.log("id", id);
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const handeleCompletedTodo = (id) => {
    console.log("id", id);
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: true };
      }
      return t;
    });
    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <>
      <div>Todo</div>
      <div className="todo">
        <div className="todo-header">
          <input
            type="text"
            placeholder="Add a new Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddTodo} disabled={!inputValue}>
            Add
          </button>
        </div>
        <div className="todo-list">
          {todos &&
            todos.map((todo, index) => {
              return (
                <div
                  key={todo.id}
                  className={`todo-item ${todo.completed ? "todo-completed" : ""}`}
                >
                  <span>
                    <span onClick={() => handeleCompletedTodo(todo.id)}>
                      {index + 1}. {todo.todo}{" "}
                    </span>
                  </span>
                  <span
                    className="todo-delete"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    <MdOutlineDeleteOutline />
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Todo;
