import React from 'react';
import Header from "./components/Header"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
