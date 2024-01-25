import { Todo } from "../models/Todo"

interface IShowTodoProps {
    todo: Todo
};

export const ShowTodo = (props: IShowTodoProps) => {

    return (
        <>
            <li key={props.todo.task}>
                <span>{props.todo.date}</span>
                <p>{props.todo.task}</p>
                <p>{props.todo.deadline}</p>
                <input type="range" min="1" max="5" step="1" value={props.todo.priority} readOnly />
                <input type="checkbox" checked={props.todo.isDone} readOnly />
            </li>
        </>
    );
};