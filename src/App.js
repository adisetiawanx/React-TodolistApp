import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Overlay from "./components/Modal/Overlay";
import NavBar from "./components/NavigationBar/NavBar";
import Todo from "./components/Todo/Todo";

let dummyTodo = [
  {
    id: 1,
    name: "Go Sleep Now !",
    important: true,
  },
  {
    id: 2,
    name: "Eat Now!",
    important: false,
  },
];

let errorMsg = "";

function App() {
  const [todoList, setTodoList] = useState(dummyTodo);
  const [isInvalid, setIsInvalid] = useState(false);

  const addTodoHandler = (name, isChecked) => {
    setTodoList((prevData) => {
      return [
        ...prevData,
        {
          id: prevData.length > 0 ? prevData[prevData.length - 1].id + 1 : 1,
          name: name[0].toUpperCase() + name.slice(1),
          important: isChecked,
        },
      ];
    });
  };

  const deleteTodoHandler = (id) => {
    const cloneTodo = [...todoList];
    const newTodo = cloneTodo.filter((todo) => todo.id !== id);
    setTodoList(newTodo);
  };

  const invalidInputHandler = (valid, erorr = "") => {
    errorMsg = erorr;
    setIsInvalid(valid);
  };

  return (
    <>
      {isInvalid && (
        <Overlay error={errorMsg} onInvalid={invalidInputHandler} />
      )}
      <div className="container">
        <NavBar />
        <Input onInvalid={invalidInputHandler} onAddTodo={addTodoHandler} />
        <hr />
        <Todo onDelTodo={deleteTodoHandler} todoData={todoList} />
        <hr />
      </div>
    </>
  );
}

export default App;
