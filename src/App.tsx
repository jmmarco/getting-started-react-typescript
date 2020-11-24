import React from "react";
import "./App.css";

// Interfaces or Types -> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/types_or_interfaces/
// TodoProps interface
interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  handleToggle: (id: number) => void;
}

// AddTodosProps interface
interface AddTodoProps {
  handleAdd: (text: string) => void;
}

// Main App Component
function App() {
  // Setup the initial todos (types are automatically inferred by Typescript)
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
    {
      id: 4,
      text: "Choke Captain Needa",
      completed: true,
    },
  ]);

  // Toggle todo
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

  // Add a new todo
  const handleAdd = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      // The id of the new todo is the id of the last plus one
      { id: prevTodos[prevTodos.length - 1].id + 1, text, completed: false },
    ]);
  };

  return (
    <div className="app">
      <header>
        <h1>Vader's Todo App</h1>
      </header>
      <AddTodo handleAdd={handleAdd} />
      {/* {JSON.stringify(todos)} */}
      <ul>
        {todos.map((t) => (
          <Todo key={t.text} {...t} handleToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}

// Single Todo Component
function Todo({ id, text, completed, handleToggle }: TodoProps) {
  return (
    <li onClick={() => handleToggle(id)} className={completed ? "strike" : ""}>
      {id} | {text}
    </li>
  );
}

// AddTodo Controlled Component -> https://reactjs.org/docs/forms.html#controlled-components
function AddTodo({ handleAdd }: AddTodoProps) {
  const [todoText, setTodoText] = React.useState("");

  // Specifying the type of React event -> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      {/* {JSON.stringify(todoText)} */}
      <input type="text" onChange={handleChange} />
      <button onClick={() => handleAdd(todoText)}>Add</button>
    </div>
  );
}

export default App;
