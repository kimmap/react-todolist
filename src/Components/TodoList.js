import TodoItem from "./TodoItem";
import "../Styles/TodoList.css";

const TodoList = (props) => {
  const { todos, deleteItem } = props;

  return (
    <div className="todo-list">
      {todos.map((item, index) => (
        <TodoItem item={item} index={index} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default TodoList;
