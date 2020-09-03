import React from 'react'
import { ACTIONS } from './App'


export default function Todo({ todo, dispatch }) {
    return (
        <div>
            <span style={
                { color: todo.complete ? '#AAA' : '#000',
                    textDecoration: todo.complete ? "line-through" :""}
                }>{todo.name}</span>
            <button
                onClick={() => dispatch({ type: ACTIONS.WYKRESL_ZADANIE, payload: { id: todo.id } })}
            >Wykreśl</button>
            <button
                onClick={() => dispatch({ type: ACTIONS.USUN_ZADANIE, payload: { id: todo.id } })}
            >Usuń</button>
        </div>
    )
}
