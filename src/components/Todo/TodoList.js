const TodoList = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body flexbox">
        {props.important ? <b>{props.name}</b> : props.name}
        <button
          onClick={() => {
            props.onDelTodo(props.id);
          }}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
