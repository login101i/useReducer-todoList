import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'



export const IncomeExpences = () => {

const {transactions}=useContext(GlobalContext)

const amounts=transactions.map(trans=>trans.amount)
    console.log(amounts)

const plusValues=amounts.filter(trans=>trans>0).reduce((acc,item)=>(acc +=item), 0).toFixed(2)
console.log(plusValues)
const minusValues = amounts.filter(trans => trans < 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    console.log(minusValues)



    return (
        <div className="inc-exp-container">
            <div>
                <h4>Przychody</h4>
    <p className="money plus">+ {numberWithCommas(plusValues)}zl</p>
            </div>
            <div>
                <h4>Wydatki</h4>
                <p className="money minus">{numberWithCommas(minusValues)}zł</p>
            </div>
        </div>

    )
}
