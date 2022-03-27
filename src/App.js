import Container from "./Components/Container";
import { useState, useRef, useEffect } from "react";
import "./Styles/styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  useEffect(() => {
    const todoList = JSON.parse(window.localStorage.getItem("todoList"));
    todoList && setTodos(todoList);
  }, []);

  const addItem = () => {
    console.log("addItem: " + todoInputRef.current.value);
    const newTodoList = [...todos, todoInputRef.current.value];
    window.localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodos(newTodoList);
    todoInputRef.current.value = null;
  };

  const deleteItem = (index) => {
    todos.splice(index, 1);
    window.localStorage.setItem("todoList", JSON.stringify(todos));
    setTodos([...todos]);
  };

  return (
    <div>
      <div className="App">
        <Container
          todos={todos}
          addItem={addItem}
          deleteItem={deleteItem}
          todoInputRef={todoInputRef}
        />
      </div>
    </div>
  );
}
