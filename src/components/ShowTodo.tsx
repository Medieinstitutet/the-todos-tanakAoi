import { Todo } from "../models/Todo"

interface IShowTodoProps {
    todo: Todo;
}

export const ShowTodo = (props: IShowTodoProps) => {

    return (
        <li>
            <span>{props.todo.date}</span>
            <p>{props.todo.task}</p>
            <p>{props.todo.deadline}</p>
            <input type="range" min="0" max="5" value={props.todo.priority} />
            <input type="checkbox" checked={props.todo.isDone} />
        </li>
    )
}