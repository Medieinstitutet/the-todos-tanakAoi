import { useState } from 'react'
import './App.scss'
import { Todo } from './models/Todo'
import { Todos } from './components/Todos'
import { AddTodo } from './components/AddTodo'

function App() {

  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  
  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
  };

  const toggleChecked = (checkedTask: string) => {
    setTodos(
      todos.map((todo) => {
        if( todo.task === checkedTask ) {
          return {...todo, isDone: !todo.isDone}
        } else {
          return todo
        }
      })
    )
  }
  
  localStorage.setItem("todos", JSON.stringify(todos));
  
  return (
    <div className='container'>
      <h1 key="title">TO DO LIST</h1>
      < AddTodo addTodo={addNewTodo} key="addtodo" />
      < Todos todos={todos} checkTodo={toggleChecked} updateTodos={updateTodos} />
    </div>
  );
};

export default App
