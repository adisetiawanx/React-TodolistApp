import { useRef } from "react";

const Input = (props) => {
  const todoName = useRef("");
  const todoImportant = useRef(false);

  const formHandler = (event) => {
    event.preventDefault();
    if (todoName.current.value.length === 0) {
      props.onInvalid(true, "Please Type Something");
      return;
    }
    props.onAddTodo(todoName.current.value, todoImportant.current.checked);
    event.target.reset();
  };

  return (
    <form onSubmit={formHandler}>
      <div className="m-4">
        <label htmlFor="userInput" className="form-label">
          New Todo
        </label>
        <input
          type="text"
          ref={todoName}
          className="form-control"
          id="userInput"
          autoComplete="off"
        />
      </div>
      <div className="m-4">
        <input
          type="checkbox"
          ref={todoImportant}
          className="form-check-input"
          id="important"
        />
        <label htmlFor="important" className="form-check-label ms-2">
          is It Important?
        </label>
      </div>
      <button type="submit" className="btn btn-primary ms-4">
        ADD
      </button>
    </form>
  );
};

export default Input;
