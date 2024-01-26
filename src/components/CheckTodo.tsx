import { ChangeEvent } from "react";
import { Todo } from "../models/Todo";

interface IChangeTodoProps {
    todo: Todo,
    checkTodo: (checkedTodo: string) => void
}

export const CheckTodo = (props: IChangeTodoProps) => {

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {

        if( e.target.nextElementSibling !== null ) {
            if ( e.target.checked === true ) {
                e.target.nextElementSibling.textContent = "check_box"
            } else {
                e.target.nextElementSibling.textContent = "check_box_outline_blank"
            }
        }

        props.checkTodo(e.target.name)
    };

    return(
        <label className="item__checked">
            <input type="checkbox" name={props.todo.task} checked={props.todo.isDone} onChange={handleChange} /><span className="material-symbols-outlined">check_box_outline_blank</span>
        </label>
    )
}