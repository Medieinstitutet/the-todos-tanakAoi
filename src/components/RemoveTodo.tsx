import { Todo } from "../models/Todo"

interface IRemoveTodoProps {
    todo: Todo,
    removeTodo: (newTodos: Todo[]) => void;
};

export const RemoveTodo = (props: IRemoveTodoProps) => {
    
    const handleClick = (todoToBeRemoved: string) => {
        
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const newTodos = todos.filter((todo: Todo) => todo.task !== todoToBeRemoved );

        props.removeTodo(newTodos);
    };

    return(
        <>
            <button className="button__remove material-symbols-outlined" onClick={() => {handleClick(props.todo.task)}}>delete</button>
        </>
    );
};