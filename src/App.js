import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Balance } from './components/Balance'
import { IncomeExpences } from './components/IncomeExpences'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { UseReducerApp } from './useReducer/App.js'

import { GlobalProvider } from './context/GlobalState'


import './App.css'

function App() {
  return (
    <div>
      <GlobalProvider>
        {/* <Switch> */}
        {/* <Header /> */}
        <Route exact path="/">
          <div className="container">
            <Balance />
            <IncomeExpences />
            <TransactionList />
            <AddTransaction />
          </div>
        </Route>
        <Route exact path="/todoList" component={UseReducerApp} />



        {/* </Switch> */}
      </GlobalProvider>


    </div>
  )
}

export default App
