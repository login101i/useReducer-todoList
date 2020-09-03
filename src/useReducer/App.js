
import React, { useState, useReducer } from 'react'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: "add-todo",
    WYKRESL_ZADANIE: 'wykresl-zadanie',
    USUN_ZADANIE:'usun-zadanie'
}


function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, noweZadanie(action.payload.name)]
        case ACTIONS.WYKRESL_ZADANIE:
            return todos.map(todo=>{
                if(todo.id===action.payload.id){
                    return { ...todo, complete:!todo.complete}
                }
                return todo
            })
        case ACTIONS.USUN_ZADANIE:
            return todos.filter(todo=>todo.id !== action.payload.id)
        default:
            return todos
    }
}

function noweZadanie(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}


export const UseReducerApp = () => {
    const [name, setName] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])



    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    return (
        <div>
            <h1>Hello from useReducer</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Wpisz zadanie do wykonania'
                />
            </form>
            {todos.map(todo=>{
             return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    )
}





