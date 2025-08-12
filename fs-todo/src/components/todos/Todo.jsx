import React from "react";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }) => {
  const todoStyle = {
    textDecoration: todo.isComplete == true ?"line-through" : "none",
    opacity : todo.isComplete == true ? 0.5 : 1,
  }
  return (
    <div style={todoStyle} className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
      <ChangeTodo todo={todo}></ChangeTodo>
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>
      <div className="flex items-center">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
