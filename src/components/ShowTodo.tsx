import { Todo } from "../models/Todo"
import { CheckTodo } from "./CheckTodo";
import { RemoveTodo } from "./RemoveTodo";

interface IShowTodoProps {
    todo: Todo,
    checkTodo: (checkedTodo: string) => void,
    removeTodo: (newTodos: Todo[]) => void
};

export const ShowTodo = (props: IShowTodoProps) => {
    
    const checkTodo = (checkedTodo: string) => {
        props.checkTodo(checkedTodo);
    };

    const removeTodo = (newTodos: Todo[]) => {
        props.removeTodo(newTodos)
    }
    
    return (
        <>
            <li className={props.todo.isDone ? "item item--done" : "item"} key={props.todo.task}>
                <span className="item__date">created: {props.todo.date}</span>
                <p className="item__task">{props.todo.task}</p>
                <p className="item__due-date">Due date: {props.todo.dueDate}</p>
                <input className="item__priority" type="range" min="1" max="5" step="1" value={props.todo.priority} readOnly />
                <div>
                    < CheckTodo todo={props.todo} checkTodo={checkTodo} />
                    < RemoveTodo todo={props.todo} removeTodo={removeTodo}/>
                </div>
            </li>
        </>
    );
};