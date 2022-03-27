import "../Styles/TodoItem.css";

const TodoItem = (props) => {
  const { item, index, deleteItem } = props;
  return (
    <div className="todo-item">
      <button className="delete-btn" onClick={() => deleteItem(index)}>
        -
      </button>
      <p className="todo-name">{item}</p>
    </div>
  );
};

export default TodoItem;
