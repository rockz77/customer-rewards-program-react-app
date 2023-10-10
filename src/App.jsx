import React from 'react'
import { TransactionsProvider } from './context/TransactionsContext'
import Transactions from './pages/Transactions'
import './App.css'

function App() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>  
  )
}

export default App
