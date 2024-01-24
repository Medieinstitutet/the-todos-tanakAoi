// import { useState } from "react";
import { Todo } from "../models/Todo"
// import { RemoveTodo } from "./RemoveTodo";
import { ShowTodo } from "./ShowTodo";

interface ITodosProps {
    todos: Todo[],
    // changedTodos: (newTodos: Todo[]) => void
};

export const Todos = (props: ITodosProps) => {

    // const [newTodos, setNewTodos] = useState<Todo[]>(props.todos)
    // console.log(newTodos);
    
    // const changeTodos = (task: string) => {
        
    //     // if( task ) {
    //     //     setNewTodos(newTodos.filter((todo) => {
    //     //         todo.task !== task
    //     //     }))
    //     //     props.changedTodos(props.todos)
    //     // }
       
    // }
    
    return (
        <>
            {props.todos.map((todo) => {
                return (
                    <>
                        < ShowTodo todo={todo} />
                        {/* < RemoveTodo todo={todo} removedTodo={() => {changeTodos(todo.task)}} /> */}
                    </>
                )
            })}
        </>
    );
};