import { ChangeEvent, FormEvent, useState } from "react"
import { Todo } from "../models/Todo"

interface IAddTodoProps {
    addTodo: (createdTodo: Todo) => void
}

export const AddTodo = (props: IAddTodoProps) => {

    const [createdTodo, setCreatedTodo] = useState<Todo>(new Todo(Date.now(), new Date().toLocaleDateString(), "", "", 1, false))

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        if( e.target.type === "text") {
            setCreatedTodo({...createdTodo, [e.target.name]: e.target.value})
        }

        if( e.target.type === "date") {
            setCreatedTodo({...createdTodo, [e.target.name]: e.target.value.toString()})
        }

        if( e.target.type === "range") {
            setCreatedTodo({...createdTodo, [e.target.name]: + e.target.value})
        }
        
    }

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault()
        props.addTodo(createdTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={createdTodo.task} onChange={handleChange} />
            <input type="date" name="deadline" value={createdTodo.deadline} onChange={handleChange} />
            <input type="range" name="priority" min="1" max="5" step="1" value={createdTodo.priority} onChange={handleChange} />
            <button>Save</button>
        </form>
    )
}