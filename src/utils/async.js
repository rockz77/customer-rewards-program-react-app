import { TRANSACTIONS_LOCAL_DATA } from '../constants'

export const getTransactionsDataLocal = async() => {
    let transactionsData = TRANSACTIONS_LOCAL_DATA.default
    return JSON.stringify(transactionsData)
}