import * as action from "@/Action"
import Input from "../input/Input"
import Button from "../button/Button"
import { FaCheck } from "react-icons/fa";

import Form from "../form/Form";

const ChangeTodo = ({todo}) => {
  return (
   <Form action={action.changeStatus} >
    <Input name="inputId" value={todo.id} type="hidden">
    
    </Input>
    <Button text={<FaCheck />}  type="submit"  actionButton bgColor={todo.isComplete ? "bg-green-400" : "bg-blue-500"}>

    </Button>
   </Form>
  )
}

export default ChangeTodo