import React, { useState } from 'react'
import { FormGroup, Input, InputGroup, InputGroupAddon, Form, Button } from "reactstrap";
import { v4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        if(todoString === "")
            return toast("Empty Todo", {type: "error"}) 

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);

        setTodoString("");
 
    }

    return(
        <Form onSubmit={handleSubmit}>
            <ToastContainer position="bottom-right"/>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" placeholder="Type something interesting" id="todo" value={todoString} onChange={e => setTodoString(e.target.value)}/>
                    <InputGroupAddon addonType="prepend">
                        <Button color="success">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}

export default TodoForm;