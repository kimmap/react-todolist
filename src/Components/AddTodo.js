import "../Styles/AddTodo.css";

const AddTodo = (props) => {
  const { addItem, todoInputRef } = props;

  return (
    <div className="add-todo">
      <input
        className="todo-input"
        onKeyPress={(e) => e.key === "Enter" && addItem()}
        placeholder={"+ 할 일을 입력하세요."}
        ref={todoInputRef}
      />
    </div>
  );
};

export default AddTodo;
