import './InputField.css'
import React, {useRef} from "react";
import {MdAddTask} from "react-icons/md";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleOnSubmit: (event: React.FormEvent) => boolean; // true if to-do was added
}

const InputField:React.FC<Props> = ({ todo, setTodo, handleOnSubmit }) => {
    // This is to reference an input field to reset focus after adding item:
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='form-add-todo' onSubmit={ (event) => {
            if(handleOnSubmit(event)) {
                // Remove focus if to-do was added
                inputRef.current?.blur();  // ? because 'current' could be null. blur() removes focus.
            }
        }}>
            <input className='input-add-todo'
                   ref={inputRef}
                   type='input'
                   placeholder='Добавить новую задачку'
                   value={todo}
                   onChange={(event) => {
                       setTodo(event.target.value)
                   }} />
            <button className='submit-add-todo' type='submit'><MdAddTask /></button>
        </form>
    )
}

export default InputField;