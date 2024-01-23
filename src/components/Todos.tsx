import { useState } from "react";
import { Todo } from "../models/Todo"
import { RemoveTodo } from "./RemoveTodo";
import { ShowTodo } from "./ShowTodo";

interface ITodosProps {
    todos: Todo[],
    changeTodos: (newTodos: Todo[]) => void
};

export const Todos = (props: ITodosProps) => {

    const [newTodos, setNewTodos] = useState(props.todos)

    const changeTodos = (todoId: number) => {

        if( todoId ) {
            setNewTodos(newTodos.filter((todo) => todo.todoId !== todoId))
        }
        
        props.changeTodos(newTodos)
    }
    
    return (
        <>
            {props.todos.map((todo) => {
                return (
                    <>
                        < ShowTodo todo={todo} />
                        < RemoveTodo todo={todo} removeTodo={changeTodos} />
                    </>
                )
            })}
        </>
    );
};