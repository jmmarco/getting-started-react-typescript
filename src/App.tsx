import React from 'react';
import './App.css';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  handleToggle: (id: number) => void;
}

function App() {

  const [todos, setTodos] = React.useState([{
    id: 1,
    text: 'Wash Death Star',
    completed: false
  }, {
    id: 2,
    text: 'Kill Obi Wan',
    completed: false
  }])

  const handleToggle = (id: number) => {
    setTodos(todos.map(t => 
        t.id === id
        ? {
          ...t,
          completed: !t.completed
        }
        :
        t
      ))
  }

  return (
    <div className="App">
      <ul>
        {todos.map(t => <Todo key={t.text} {...t} handleToggle={handleToggle} />)}
      </ul>
    </div>
  );
}


function Todo({ id, text, completed, handleToggle} : TodoProps) {
  return (
    <li onClick={() => handleToggle(id) } className={completed ? 'strike' : '' }>{id} | {text}</li>
  )
}

export default App;
