import React from 'react'
import { Button } from "../Input"
import { useTodo } from '../context/ToDoContext'

const ToDoItems = ({ todo }) => {

    const { removeTodo } = useTodo()


    return (
        <>
            <div className='flex items-center gap-5'>
                <div className='outline-0 px-[20px] py-3 text-[#F4EAE6] bg-[#000] rounded-[50px] placeholder:text-[#F4EAE6] mob-user'>
                    <p className='text-[#fff]'>{todo.text}</p>
                </div>

                <Button
                    className={"bg-[#2F5061] px-[20px] py-[10px] rounded-[50px] text-[#F4EAE6] text-[16px] hover:rounded-[0px] duration-200 active:scale-95 context-btn"}
                    title={"✖"}
                    click={() => removeTodo(todo.id)}
                />
            </div>
        </>
    )
}

export default ToDoItems