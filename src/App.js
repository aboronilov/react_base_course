import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Context from "./context";
import Loader from "./Loader";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)        
      })
  }, [])

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
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
          ) : loading ? null : (
          <p>Все сделано</p> 
          )}
      </div>
    </Context.Provider>
  );
}

export default App;


