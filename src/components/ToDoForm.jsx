import React, { useState } from 'react'
import { GlobalInput, Button, } from '../Input'
import { useTodo } from "../context/ToDoContext"

const ToDoForm = () => {

    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        console.log(setTodo);
        
        if (!todo) return;

        
        addTodo({ text: todo })
        setTodo("")
        console.log(todo);
    }


    return (
        <>
            <form className='flex gap-5 todoForm' onSubmit={add}>
                <GlobalInput
                    holder={"Add Todo..."}
                    style={"outline-0 px-[20px] py-3 text-[#F4EAE6] bg-[#000] rounded-[50px] placeholder:text-[#F4EAE6] mob-user"}
                    value={todo}
                    chnage={(e => setTodo(e.target.value))}
                />

                <Button
                    className={"bg-[#2F5061] px-[20px] py-[10px] rounded-[50px] text-[#F4EAE6] text-[16px] hover:rounded-[0px] duration-200 active:scale-95 context-btn"}
                    title={"Add"}
                    type={"submit"}
                />
            </form>
        </>
    )
}

export default ToDoForm