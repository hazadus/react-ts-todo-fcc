import React from "react";
import './TodoItem.css'
import {Todo} from "../model";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md";

interface Props {
    todo: Todo;
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem:React.FC<Props> = ({ todo, todoList, setTodoList }) => {
    return (
        <form className='form-todo-item'>
            <span className='text-todo-item'>
                { todo.todo }
            </span>
            <div>
                <span className='icon-todo-item'><AiFillEdit /></span>
                <span className='icon-todo-item'><AiFillDelete /></span>
                <span className='icon-todo-item'><MdDone /></span>
            </div>
        </form>
    )
}

export default TodoItem;