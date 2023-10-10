import React, { createContext, useContext, useEffect, useState } from 'react'
import { getTransactionsDataLocal } from '../utils/async'

const TransactionsContext = createContext()

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getTransactionsData = async() => {
        let getTransData = await getTransactionsDataLocal()
        let transactionsData = JSON.parse(getTransData)
        setTransactions(transactionsData)
        setLoaded(true)
    }

    useEffect(() => {
        getTransactionsData()
    }, [])
    
    if (!loaded) {
        return 'Loading...';
    }
    
    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>{ children }</TransactionsContext.Provider>
    )
}

export const useTransactionsContext = () => {
    const context = useContext(TransactionsContext)
    if (!context) {
        throw new Error('useTransactionsContext must be used within a TransactionsProvider')
    }
    return context
}