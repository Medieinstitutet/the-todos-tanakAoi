import { Todo } from "../models/Todo"
import { CheckTodo } from "./CheckTodo";

interface IShowTodoProps {
    todo: Todo,
    checkTodo: (checkedTodo: string) => void
};

export const ShowTodo = (props: IShowTodoProps) => {
    
    const checkTodo = (checkedTodo: string) => {
        props.checkTodo(checkedTodo);
    };

    return (
        <>
            <li key={props.todo.task}>
                <span>{props.todo.date}</span>
                <p>{props.todo.task}</p>
                <p>{props.todo.deadline}</p>
                <input type="range" min="1" max="5" step="1" value={props.todo.priority} readOnly />
                < CheckTodo todo={props.todo} checkTodo={checkTodo} />  
            </li>
        </>
    );
};