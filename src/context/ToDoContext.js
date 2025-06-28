import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todo: [
        {
            id: 1,
            todo: ""
        }
    ],

    addTodo: (todo) => { },
    removeTodo: (id) => { },
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider