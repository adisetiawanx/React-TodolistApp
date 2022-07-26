import TodoList from "./TodoList";

const Todo = (props) => {
  return (
    <div className="m-4 text-center">
      {props.todoData.length > 0 &&
        props.todoData.map((todo) => (
          <TodoList
            onDelTodo={props.onDelTodo}
            key={todo.id}
            id={todo.id}
            name={todo.name}
            important={todo.important}
          />
        ))}
      {props.todoData.length === 0 && <p>No Todo Here...</p>}
    </div>
  );
};

export default Todo;
