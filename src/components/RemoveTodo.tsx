import { Todo } from "../models/Todo"

interface IRemoveTodoProps {
    todo: Todo
    removeTodo: (todoId: number) => void
}

export const RemoveTodo = (props: IRemoveTodoProps) => {

    const removeTodo = (todoId: number) => {
        props.removeTodo(todoId)
    }

    return (
        <>
            <button onClick={() => {removeTodo(props.todo.todoId)}}>x</button>
        </>
    )
}