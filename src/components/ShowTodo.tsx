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
            <li className="item" key={props.todo.task}>
                <span className="item__date">created: {props.todo.date}</span>
                <p className="item__task">{props.todo.task}</p>
                <p className="item__due-date">Due date: {props.todo.dueDate}</p>
                <input className="item__priority" type="range" min="1" max="5" step="1" value={props.todo.priority} readOnly />
                <div>
                    < CheckTodo todo={props.todo} checkTodo={checkTodo} />
                </div>
            </li>
        </>
    );
};