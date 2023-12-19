/* eslint-disable no-unused-vars */
import {createContext, useContext} from 'react'

export const TodoContex = createContext({
    todos: [
        {
            id:1,
            todoContent:"Todo msg",
            completed: false,
        }
    ],
    addTodo: (todoContent) =>{},
    updateTodo: (id, todoContent) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContex)
}

export const TodoProvider = TodoContex.Provider