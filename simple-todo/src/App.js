import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")

  function handleSubmit(e){
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo));
    setTodo("")
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => <div className='todo'>{todo.text}</div>)}
    </div>
  );
}

export default App;
