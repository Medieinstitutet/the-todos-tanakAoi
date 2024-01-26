import { ChangeEvent } from "react"
import { Todo } from "../models/Todo"

interface ISortTodosProps {
    sortTodos: (sortedTodos: Todo[]) => void
}

export const SortTodos = (props: ISortTodosProps) => {

    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    
    let newTodos: Todo[]

    const handleChange = ( e: ChangeEvent<HTMLSelectElement> ) => {
        
        if( e.target.value === "dueDate" ) {
          newTodos = todos.sort((a:Todo, b: Todo) => a.dueDate > b.dueDate ? 1 : -1 )
        }
    
        if( e.target.value === "priority" ) {
          newTodos = todos.sort((a:Todo, b: Todo) => a.priority < b.priority ? 1 : -1 )
        }

    }
    
    const handleClick = () => {
        props.sortTodos(newTodos)
    }

    return(
        <>
            <div className="sort">
                <select className="sort__options" name="" id="" onChange={handleChange}>
                    <option value="">--Sort by---</option>
                    <option value="dueDate">Due date</option>
                    <option value="priority">Priority</option>
                </select>
                <button className="sort__button" onClick={handleClick}>Sort</button>
            </div>
        </>
    )
}
