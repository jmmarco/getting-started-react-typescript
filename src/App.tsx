import React from "react";
import "./App.css";

// TodoProps (Typescript)
interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  handleToggle: (id: number) => void;
}

// Main App Component
function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Wash Death Star",
      completed: false,
    },
    {
      id: 2,
      text: "Destroy Alderaan",
      completed: true,
    },
    {
      id: 3,
      text: "Tell Luke I'm his father",
      completed: false,
    },
  ]);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
            }
          : t
      )
    );
  };

  const handleAdd = () => {
    // Write code so a new TODO can be added to the main todos array...
  }

  return (
    <div className="app">
      <header>
        <h1>Vader's Todo App</h1>
      </header>
      <AddTodo />
      <ul>
        {todos.map((t) => (
          <Todo key={t.text} {...t} handleToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}

function Todo({ id, text, completed, handleToggle }: TodoProps) {
  return (
    <li onClick={() => handleToggle(id)} className={completed ? "strike" : ""}>
      {id} | {text}
    </li>
  );
}

// Add Todo 
function AddTodo() {

  // You need to add the necessary logic (state or refs) to handle the input
  // You also need to add an event listener to the button so the Todo can be added in the main component

  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  );
}

export default App;
