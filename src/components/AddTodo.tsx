import { ChangeEvent, FormEvent, useState } from "react"
import { Todo } from "../models/Todo"

interface IAddTodoProps {
    addTodo: (todo: Todo) => void
}

export const AddTodo = (props: IAddTodoProps) => {

    const [createdTodo, setCreatedTodo] = useState<Todo>(
        new Todo(new Date().toLocaleDateString(), "", "", 1, false)
    );
    
    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {

        if( e.target.type === "text") {
            setCreatedTodo({...createdTodo, [e.target.name]: e.target.value});
        };

        if( e.target.type === "date") {
            setCreatedTodo({...createdTodo, [e.target.name]: e.target.value.toString()});
        };

        if( e.target.type === "range") {
            setCreatedTodo({...createdTodo, [e.target.name]: + e.target.value});
        };
        
    };

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();
        props.addTodo(createdTodo);
    };

    return (
        <div className="add">
            <h2 className="add__title">Add Todo:</h2>
            <form className="add__form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="task" className="add__input" placeholder="Task" value={createdTodo.task} onChange={handleChange} required />
                    <input type="date" name="dueDate" className="add__input" value={createdTodo.dueDate} onChange={handleChange} required />
                </div>
                <div>
                    <label className="add__priority">
                        <span>Priority:</span><input type="range" name="priority" min="1" max="5" step="1" value={createdTodo.priority} onChange={handleChange} />
                    </label>
                    <button className="button button__save">Save</button>
                </div>
            </form>
        </div>
    );
};