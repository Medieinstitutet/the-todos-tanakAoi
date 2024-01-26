import { Todo } from "../models/Todo"
import { ShowTodo } from "./ShowTodo";
import { SortTodos } from "./SortTodos";

interface ITodosProps {
    todos: Todo[],
    checkTodo: (checkedTodo: string) => void,
    updateTodos: (newTodos: Todo[]) => void;
};

export const Todos = (props: ITodosProps) => {

    const changeTodos = (newTodos: Todo[]) => {
        if ( newTodos ) {
            props.updateTodos(newTodos);
        }
    };

    const checkTodo = (checkedTodo: string) => {
        if( checkedTodo ) {
            props.checkTodo(checkedTodo);
        }
    };

    return (
        <div>
            < SortTodos sortTodos={changeTodos} />
            <ul className="list">
                {props.todos.map((todo) => {
                    return (
                        <>
                            < ShowTodo todo={todo} checkTodo={checkTodo} removeTodo={changeTodos} />
                        </>
                    );
                })}
            </ul>
        </div>
    );
};