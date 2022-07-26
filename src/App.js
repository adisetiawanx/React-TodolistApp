import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
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

function App() {
  const [todoList, setTodoList] = useState(dummyTodo);

  const addTodoHandler = (name, isChecked) => {
    setTodoList((prevData) => {
      return [
        ...prevData,
        {
          id: prevData.length > 0 ? prevData[prevData.length - 1].id + 1 : 1,
          name: name,
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

  return (
    <div className="container">
      <NavBar />
      <Input onAddTodo={addTodoHandler} />
      <hr />
      <Todo onDelTodo={deleteTodoHandler} todoData={todoList} />
      <hr />
    </div>
  );
}

export default App;
