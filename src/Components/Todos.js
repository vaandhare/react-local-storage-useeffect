import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaTimesCircle} from 'react-icons/fa'

const Todos = ({todos, removeTodo}) => {
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(item => (
                <ListGroupItem key={item.id}>
                    {item.todoString}
                    <span className="float-right" onClick={() => removeTodo(item.id)}><FaTimesCircle/></span>
                </ListGroupItem>
                
            ))}
        </ListGroup>
    )
}

export default Todos;