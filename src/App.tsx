import { useState } from 'react'
import './App.css'
import { ShowTodo } from './components/ShowTodo'
import { Todo } from './models/Todo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([
    new Todo(new Date().toLocaleDateString(), "Hämta paket", "2024/02/02", 5, false),
    new Todo(new Date().toLocaleDateString(), "Städa", "2024/02/05", 3, false)
  ])

  return (
    <>
      <h1>TO DO LIST</h1>
      <ul>
        {todos.map((todo) => {
          return < ShowTodo todo={todo} />
        })}
      </ul>
    </>
  )
}

export default App
