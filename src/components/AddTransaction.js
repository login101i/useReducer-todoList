import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)


    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.random(),
            text,
            amount:Number(amount)
        }

        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }

    return (
        <>
            <h3>Dodaj nową transakcję koleżko</h3>
            <form onSubmit={onSubmit}>
                <div className="htmlForm-control">
                    <label htmlFor="text">Tekst</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        id="text"
                        placeholder="Wpisz tutaj"
                    />
                </div>
                <div className="htmlForm-control">
                    <label htmlFor="amount"
                    >Ilość <br />
            (minus - wydate, plus - przychód)</label>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        id="amount"
                        placeholder="Wpisz Ilość"
                    />
                </div>
                <button className="btn">Dodaj Transakcję</button>
            </form>

        </>
    )
}
