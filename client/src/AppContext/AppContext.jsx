import React, { useState , createContext } from 'react'
import axios from 'axios'
export const AppContext = createContext()

export default function AppProvider(props){

    const [ expenses, setExpenses ] = useState([])
    const [ earnings, setEarnings ] = useState([])
    const [ totalEarned, setTotalEarned ] = useState(0)
    const [ totalSpent , setTotalSpent ] = useState(0)
    const [ balanceAmount , setBalanceAmount ] = useState(0)
    const [ categories , setCategories ] = useState([])


    const fetchSummary = () => {
        axios.get("http://127.0.0.1:5000/view")
        .then(response=>{
            console.log("Fetch Summary Success - Response - ",response.data)
            setTotalEarned(response.data['totalEarned'])
            setTotalSpent(response.data['totalSpent'])
            setBalanceAmount(response.data['balanceAmount'])
        })
        .catch(error=>{
            console.log("Fetch Summary Error - ",error)
        })
    }

    const fetchCategories = () => {
        axios.get("http://127.0.0.1:5000/categories/view")
        .then(response=>{
            console.log("Fetch Category Success - Response - ",response.data)
            setCategories(response.data.data)
        })
        .catch(error=>{
            console.log("Fetch Category Error - ",error)
        })
    }

    const addCategory = (categoryItem) => {
        console.log(categoryItem," is categoryItem")
        axios.post("http://127.0.0.1:5000/categories/add",categoryItem)
        .then(response=>{
            console.log("Add CATEGORY Success - Response - ",response.data)
            setCategories(categories.concat(categoryItem))
        })
        .catch(error=>{
            console.log("Add CATEGORY error",error)
        })
    }

    const fetchExpenses = () => {
        axios.get("http://127.0.0.1:5000/expenses/view")
        .then(response=>{
            console.log("Fetch Expenses Success - Response - ",response.data)
            setExpenses(response.data.data)
        })
        .catch(error=>{
            console.log("Fetch Expenses Error - ",error)
        })
    }

    const addExpense = (item) => {
        axios.post("http://127.0.0.1:5000/expenses/add",item)
        .then(response=>{
            console.log("Add EXPENSE Success - Response - ",response.data)
            setExpenses(response.data.data)
        })
        .catch(error=>{
            console.log("Add EXPENSE error",error)
        })
    }

    const fetchEarnings = () => {
        axios.get("http://127.0.0.1:5000/earnings/view")
        .then(response=>{
            console.log("Fetch Earnings Success - Response - ",response.data)
            setEarnings(response.data.data)
        })
        .catch(error=>{
            console.log("Fetch Earnings Error - ",error)
        })
    }

    const addEarning = (item) => {
        axios.post("http://127.0.0.1:5000/earnings/add",item)
        .then(response=>{
            console.log("Add EARNING Success - Response - ",response.data)
            setEarnings(response.data.data)
        })
        .catch(error=>{
            console.log("Add EARNING error",error)
        })
    }

    return (
        <AppContext.Provider value={{expenses, fetchExpenses, fetchEarnings, fetchCategories, setExpenses, addExpense, earnings, addEarning, totalEarned, totalSpent, balanceAmount, categories , addCategory, setCategories, fetchSummary}}>
            {props.children}
        </AppContext.Provider>
    )
}