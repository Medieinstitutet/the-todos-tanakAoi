import { Todo } from "../models/Todo"

interface IShowTodoProps {
    todo: Todo
}

export const ShowTodo = (props: IShowTodoProps) => {

    return (
        <>
            <li>
                <span>{props.todo.date}</span>
                <input type="text" name="task" value={props.todo.task} />
                <input type="date" name="deadline" value={props.todo.deadline}/>
                <input type="range" min="1" max="5" step="1" value={props.todo.priority} />
                <input type="checkbox" checked={props.todo.isDone} />
            </li>
        </>
    )
}