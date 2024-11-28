import React, { useState } from 'react'
import Header from '../Header'
import Cards from '../Cards'
import AddIncome from '../Modals/AddIncome'
import Expenses from '../Modals/Expenses'
import moment from 'moment';
import TransactionsTable from '../Transactions/TransactionsTable'


function Dashboard() {
    const [incomeVisible, setIncomeVisible] = useState(false);
    const [expenseVisible, setExpenseVisible] = useState(false);
    const [transactions, setTransactions] = useState([]);

    const handleIncomeVisible = () => {
        setIncomeVisible(true);
    }
    const handleIncomeClose = () => {
        setIncomeVisible(false);
    }
    const handleExpenseVisible = () => {
        setExpenseVisible(true);
    }
    const handleExpenseClose = () => {
        setExpenseVisible(false);
    }
    const onFinish = (values, type) => {
        const newTransaction = {
            type: type,
            date: values.date.format("YYYY-MM-DD"),
            amount: parseFloat(values.amount),
            tag: values.tagIncome,
            name: values.incomeType
        }
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
        setIncomeVisible(false);
        console.log(newTransaction, "newTransaction")
    }

    return (
        <div>
            <Header />
            <Cards showIncomeModal={handleIncomeVisible} showExpenseModal={handleExpenseVisible} />
            <AddIncome isIncomeVisible={incomeVisible} handleIncomeCancel={handleIncomeClose} onFinish={onFinish} />
            <Expenses isExpenseVisible={expenseVisible} handleExpenseCancel={handleExpenseClose} />
            <TransactionsTable transactions={transactions} />
        </div>
    )
}

export default Dashboard