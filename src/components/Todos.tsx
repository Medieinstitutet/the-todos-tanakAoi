import { Todo } from "../models/Todo"
import { RemoveTodo } from "./RemoveTodo";
import { ShowTodo } from "./ShowTodo";

interface ITodosProps {
    todos: Todo[],
    checkTodo: (checkedTodo: string) => void,
    newTodos: (newTodos: Todo[]) => void;
};

export const Todos = (props: ITodosProps) => {

    const changeTodos = (newTodos: Todo[]) => {
        if( newTodos ) {
            props.newTodos(newTodos);
        };
    };

    const checkTodo = (checkedTodo: string) => {
        props.checkTodo(checkedTodo);
    };

    return (
        <>
            {props.todos.map((todo) => {
                return (
                    <>
                        < ShowTodo todo={todo} checkTodo={checkTodo} />
                        < RemoveTodo todo={todo} newTodos={changeTodos} />
                    </>
                );
            })}
        </>
    );
};