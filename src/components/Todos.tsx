import { Todo } from "../models/Todo"
import { ShowTodo } from "./ShowTodo";

interface ITodosProps {
    todos: Todo[]
};

export const Todos = (props: ITodosProps) => {

    return (
        <>
            {props.todos.map((todo) => {
                return (
                    < ShowTodo todo={todo} />
                )
            })}
        </>
    );
};