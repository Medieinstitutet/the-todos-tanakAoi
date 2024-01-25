import { Todo } from "../models/Todo"
import { RemoveTodo } from "./RemoveTodo";
import { ShowTodo } from "./ShowTodo";

interface ITodosProps {
    todos: Todo[],
    newTodos: (newTodos: Todo[]) => void;
};

export const Todos = (props: ITodosProps) => {

    const changeTodos = (newTodos: Todo[]) => {

        if( newTodos ) {
            props.newTodos(newTodos);
        };
    };

    return (
        <>
            {props.todos.map((todo) => {
                return (
                    <>
                        < ShowTodo todo={todo} />
                        < RemoveTodo todo={todo} newTodos={changeTodos} />
                    </>
                );
            })}
        </>
    );
};