import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'
import {numberWithCommas} from '../utils/format'


export  function Balance() {

    const {transactions}=useContext(GlobalContext)

    const amounts=transactions.map(trans=>Number(trans.amount))
    // const amountsOk=parseInt(amounts,1)
    console.log(amounts)
    // console.log(amountsOk)
    const total = amounts.reduce((acc,item)=>(acc+=item), 0).toFixed(2)
    console.log(total)
   

    return (
        <>
            <h4>Twoje Rachunki</h4>
            <h1 > {numberWithCommas(total)} zł</h1>
        </>
    )
}
