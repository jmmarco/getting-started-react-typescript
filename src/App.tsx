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

  return (
    <div className="app">
      <header>
        <h1>Vader's Todo App</h1>
      </header>
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

export default App;
