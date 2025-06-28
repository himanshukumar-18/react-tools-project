import React, { useEffect, useState } from 'react'
import { ToDoForm, ToDoItems } from "../Input"
import { TodoProvider } from "../context/ToDoContext"


const Todo = () => {

    const [todo, setTodo] = useState([])

    const addTodo = (todo) => {
        setTodo((prev) => [...prev, { id: Date.now(), ...todo }])
    }

    const removeTodo = (id) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id))
    }

    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem("todo"))

        if (todo && todo.length > 0) {
            setTodo(todo)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])

    return (
        <>
            <TodoProvider value={{ todo, addTodo, removeTodo }} >
                <div className='flex flex-col'>
                    <div className='w-fit h-fit bg-[#ffffff32] backdrop-blur-[10px] rounded-sm px-[20px] py-[40px] todo'>
                        <ToDoForm />


                        <div className='mt-5'>
                            {
                                todo.map((todo) => (
                                    <div key={todo.id} className='mt-5'>
                                        <ToDoItems todo={todo} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </TodoProvider>
        </>
    )
}

export default Todo