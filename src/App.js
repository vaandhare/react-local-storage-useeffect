import React, {useState, useEffect} from 'react'
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos'

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if(localTodos)
      setTodos(JSON.parse(localTodos))
  }, []);


  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container fluid>
      <h1>Todo with Local Storage</h1>
      <Todos todos={todos} removeTodo={removeTodo}/>
      <TodoForm addTodos={addTodos}/>
    </Container>
  );
}

export default App;
