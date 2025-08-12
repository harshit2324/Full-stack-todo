import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";
import * as action from "@/Action"

const DeleteTodo = ({ todo }) => {
  return (
    <Form action={action.DeleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;
