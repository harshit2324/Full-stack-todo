import * as actions from "@/Action";
import Button from "../button/Button"
import Form from "../form/Form"
import Input from "../input/Input"


const AddTodo = () => {
  return (
    <div>
        <Form action={actions.createTodo}>
            <div className="flex gap-4 mt-2 items-center">
            <Input name='input' type='text' placeholder='Add Todo Here....' />
            <Button type="submit" text="Add" bgColor='bg-blue-600' />
            </div>
        </Form>
    </div>
  )
}

export default AddTodo