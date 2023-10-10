import React, { useCallback } from 'react'
import { useTransactionsContext } from '../context/TransactionsContext'
import './GetTransactions.css'

const RewardsComponent = () => {
    const { transactions } = useTransactionsContext()

    const calculateRewardPoints = useCallback(amount => {
        let points = 0
        if (amount > 100) {
            points += (amount - 100) * 2 + 50 
        } else if (amount > 50) {
            points += amount - 50 
        }
        return points
    }, [])

    const extractMonth = useCallback(dateStr => {
        return new Date(dateStr).getMonth() + 1 
    }, [])

    const calculateRewards = useCallback(data => {
        return data.map(customer => {
            let totalRewards = 0
            let monthlyRewards = { 6: 0, 7: 0, 8: 0 }   

            customer.transactions.forEach(transaction => {
                const month = extractMonth(transaction.date)
                const points = calculateRewardPoints(transaction.transaction_amount)
                monthlyRewards[month] += points
                totalRewards += points
            })

            return {
                customer_name: customer.customer_name,
                totalRewards,
                monthlyRewards
            }
        })
    }, [])

    const rewardsData = calculateRewards(transactions);

    return (
        <div>
            {rewardsData.map(customerReward => (
                <div className="customer-container" key={customerReward.customer_name}>
                    <h3>{customerReward.customer_name}</h3>
                    <p>Total Rewards: {customerReward.totalRewards} points</p>
                    <h4>Monthly Rewards:</h4>
                    <ul>
                        <li>June: {customerReward.monthlyRewards[6]} points</li>
                        <li>July: {customerReward.monthlyRewards[7]} points</li>
                        <li>August: {customerReward.monthlyRewards[8]} points</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default RewardsComponent
