import TodoList from "./Todo/TodoList";

function App(props) {
  const todos = [
    {id: 1, isCompledet: false, title: 'Купить хлеб'},
    {id: 1, isCompledet: false, title: 'Купить масло'},
    {id: 1, isCompledet: false, title: 'Купить молоко'},
  ]

  return (
    <div className="wrapper">
      <h1>React</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

// 26:31