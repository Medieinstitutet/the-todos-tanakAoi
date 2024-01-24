import { useState } from 'react'
import './App.css'
import { Todo } from './models/Todo'
import { Todos } from './components/Todos'
import { AddTodo } from './components/AddTodo'

function App() {

  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  )
  
  const addTodo = (createdTodo: Todo) => {
    setTodos([...todos, createdTodo])
  }

  localStorage.setItem("todos", JSON.stringify(todos))
  
  return (
    <>
      <h1>TO DO LIST</h1>
      <ul>
        < Todos todos={todos} />
      </ul>
      < AddTodo addTodo={addTodo} />
    </>
  )
}

export default App
