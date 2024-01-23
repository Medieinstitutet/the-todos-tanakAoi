import { useState } from 'react'
import './App.css'
import { Todo } from './models/Todo'
import { Todos } from './components/Todos'
import { AddTodo } from './components/AddTodo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([
    // JSON.parse(localStorage.getItem("todo") || "[]")
  ])

  const changeTodos = (newTodos: Todo[]) => {
    setTodos(newTodos)
    // localStorage.setItem("todos", JSON.stringify(setTodos(newTodos)))
  }

  const addTodo = (createdTodo: Todo) => {
    setTodos([...todos, createdTodo])
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <ul>
        < Todos todos={todos} changeTodos={changeTodos} />
      </ul>
      < AddTodo addTodo={addTodo} />
    </>
  )
}

export default App
