import React, {useRef, useState} from 'react';
import './App.css';
import {Todo} from "./model";
import InputField from "./components/InputField";
import TodoListView from "./components/TodoListView";
import {SiCss3, SiFastapi, SiHtml5, SiMongodb, SiPycharm, SiPython, SiReact, SiTypescript} from "react-icons/si";

// Type: FC = functional component
const App: React.FC = () => {
    const [todo, setTodo] = useState<string>('');
    const [todoList, setTodoList] = useState<Todo[]>([]);

    // Return true if we actually added to-do (to clear focus later)
    const handleOnSubmit = (event: React.FormEvent): boolean => {
        event.preventDefault();

        if (todo) {
            const todoText = todo.trimStart().trimEnd();
            if (todoText.length > 3) {
                setTodoList([...todoList, { id: Date.now(), todo: todoText, isDone: false }])
                // Clear value/input box:
                setTodo('');
                return true;
            }
        }

        return false;
    }

    return (
        <div className="App">
            <header>
                Taskifier
            </header>
            <InputField todo={todo}
                        setTodo={setTodo}
                        handleOnSubmit={handleOnSubmit} />
            <TodoListView
                todoList={todoList}
                setTodoList={setTodoList} />

            <footer>
                <p>
                    Made with <SiTypescript /> <SiReact /> <SiHtml5 /> <SiCss3 /> <SiPython /> <SiPycharm /> <SiFastapi /> <SiMongodb />
                </p>
            </footer>
        </div>
    );
}

export default App;