import { useState } from "react";
import AddTodo from "./AddTodo";
import Context from "./context";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, isCompleted: false, title: "Купить хлеб" },
    { id: 2, isCompleted: false, title: "Купить масло" },
    { id: 3, isCompleted: false, title: "Купить молоко" },
  ]);

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    )
  }

  function addTodo(title) {
    setTodos(
      todos.concat([{
        title,
        id: Date.now(),
        isCompleted: false
      }])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>Все сделано</p>}        
      </div>
    </Context.Provider>
  );
}

export default App;


