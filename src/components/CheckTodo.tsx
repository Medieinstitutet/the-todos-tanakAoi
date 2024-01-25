import { ChangeEvent } from "react";
import { Todo } from "../models/Todo";

interface IChangeTodoProps {
    todo: Todo,
    checkTodo: (checkedTodo: string) => void
}

export const CheckTodo = (props: IChangeTodoProps) => {

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        props.checkTodo(e.target.name)
    };

    return(
        <input type="checkbox" name={props.todo.task} checked={props.todo.isDone} onChange={handleChange} />
    )
}