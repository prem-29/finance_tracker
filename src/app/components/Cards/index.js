import React from 'react'
import './styles.css'
import { Button, Card, Row } from 'antd'

function Cards({ showIncomeModal, showExpenseModal }) {
    return (
        <div>
            <Row className='rowStyle'>
                <Card className='cardStyle'>
                    <h2>Current Balance</h2>
                    <p>₹ 0</p>
                    <Button type='primary' className='btn_class'>Reset Balance</Button></Card>
                <Card className='cardStyle' >
                    <h2>Total Income</h2>
                    <p>₹ 0</p>
                    <Button type='primary' className='btn_class' onClick={showIncomeModal}>Add Income</Button></Card>
                <Card className='cardStyle'>
                    <h2>Total Expenses</h2>
                    <p>₹ 0</p>
                    <Button type='primary' className='btn_class' onClick={showExpenseModal}>Add Expenses</Button></Card>
            </Row>
        </div>
    )
}

export default Cards