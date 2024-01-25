import { useState } from 'react'
import './App.css'
import { Todo } from './models/Todo'
import { Todos } from './components/Todos'
import { AddTodo } from './components/AddTodo'

function App() {

  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const changeTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
  };
  
  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
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
    <>
      <h1 key="title">TO DO LIST</h1>
      <ul>
        < Todos todos={todos} newTodos={changeTodos} checkTodo={toggleChecked} key="todos" />
      </ul>
      < AddTodo addTodo={addNewTodo} key="addtodo" />
    </>
  );
};

export default App
