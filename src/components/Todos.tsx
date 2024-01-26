import { Todo } from "../models/Todo"
import { RemoveTodo } from "./RemoveTodo";
import { ShowTodo } from "./ShowTodo";
import { SortTodos } from "./SortTodos";

interface ITodosProps {
    todos: Todo[],
    checkTodo: (checkedTodo: string) => void,
    updateTodos: (newTodos: Todo[]) => void;
};

export const Todos = (props: ITodosProps) => {

    const updateTodos = (newTodos: Todo[]) => {
        if( newTodos ) {
            props.updateTodos(newTodos)
        }
    }

    const checkTodo = (checkedTodo: string) => {
        props.checkTodo(checkedTodo);
    };

    return (
        <>
            < SortTodos todos={props.todos} sortTodos={updateTodos} />
            {props.todos.map((todo) => {
                return (
                    <>
                        < ShowTodo todo={todo} checkTodo={checkTodo} />
                        < RemoveTodo todo={todo} removeTodos={updateTodos} />
                    </>
                );
            })}
        </>
    );
};