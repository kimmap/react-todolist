import "../Styles/Container.css";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoList from "./TodoList";

const Container = (props) => {
  const { todos, addItem, deleteItem, todoInputRef } = props;
  console.log("todos=" + todos);
  return (
    <div className="container">
      <Header />
      <AddTodo addItem={addItem} todoInputRef={todoInputRef} />
      <TodoList todos={todos} deleteItem={deleteItem} />
    </div>
  );
};

export default Container;
