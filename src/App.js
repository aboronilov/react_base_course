import { useState } from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, isCompleted: false, title: "Купить хлеб" },
    { id: 2, isCompleted: false, title: "Купить масло" },
    { id: 3, isCompleted: false, title: "Купить молоко" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id ) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    )
  }

  return (
    <div className="wrapper">
      <h1>React</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;

// 26:31
