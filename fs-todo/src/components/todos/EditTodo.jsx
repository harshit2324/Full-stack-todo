"use client";

import { useState } from "react";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import Form from "../form/Form";
import Input from "../input/Input";
import * as action from "@/Action"

const EditTodo = ({ todo }) => {
  const [editTodo, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if(todo.isComplete) {
      return;
    }
    setEditTodoState(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodoState(!editTodo)
  }
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodo ? (
        <Form action={action.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center">
             <Input name="newtitle" placeholder="edit todo..." type="text"></Input>
          <Button type="submit" text="save"></Button>
          </div>
         
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
