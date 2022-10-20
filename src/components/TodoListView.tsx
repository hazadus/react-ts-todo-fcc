import React from "react";
import './TodoListView.css'
import {Todo} from "../model";
import TodoItem from "./TodoItem";

interface Props {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListView:React.FC<Props> = ({ todoList, setTodoList }) => {
    return (
        <div className='todo-list-view'>
            {
                todoList.map((todo) => {
                    return (
                        <TodoItem key={ todo.id }
                                  todo={ todo }
                                  todoList={todoList}
                                  setTodoList={setTodoList} />
                    )
                })
            }
        </div>
    )
}

export default TodoListView;