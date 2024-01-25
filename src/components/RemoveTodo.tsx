import { Todo } from "../models/Todo"

interface IRemoveTodoProps {
    todo: Todo,
    newTodos: (newTodos: Todo[]) => void;
};

export const RemoveTodo = (props: IRemoveTodoProps) => {
    
    const handleClick = (todoToBeRemoved: string) => {
        
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const newTodos = todos.filter((todo: Todo) => todo.task !== todoToBeRemoved );

        props.newTodos(newTodos);
    };

    return(
        <>
            <button onClick={() => {handleClick(props.todo.task)}}>x</button>
        </>
    );
};