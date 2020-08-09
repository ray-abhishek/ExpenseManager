import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import Display from '../../Components/Small/Display'
import Form from '../Small/Form'

export default function Expense(){

    const [ expense , setExpense ] = useState('')
    const [ amount , setAmount ] = useState(0)
    const { expenses , addExpense, fetchExpenses } = useContext(AppContext)
    useEffect(()=>{
        console.log("useEffect expense")
        fetchExpenses()
    }, [])

    
    return(
        <div>
            <Form title="Add Expense" addItem={addExpense} amountType="Expense" setAmount={setAmount} amount={amount}/>
            <div className="jumbotron w-75 mx-auto pt-5 mt-3 bg-white" style={expenseStyle}>
                <Display data={expenses} title="Expense"/>
            </div>
        </div>
    )
}


const expenseStyle = {
  //  backgroundColor : '#d8a158',
    
}