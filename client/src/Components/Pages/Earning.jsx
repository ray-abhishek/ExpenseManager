import React, { useState, useContext , useEffect } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import Display from '../../Components/Small/Display'
import Form from '../Small/Form'


export default function Earning(){

    const [ earning , setEarning ] = useState('')
    const [ amount , setAmount ] = useState(0)

    const { earnings , addEarning, fetchEarnings } = useContext(AppContext)
    useEffect(()=>{
        console.log("useEffect earning")
        fetchEarnings()
    }, [])
    return(
        <div>
            <Form title="Add Earning" addItem={addEarning}  setAmount={setAmount} amount={amount} amountType="Earning"/>
            
            <div className="jumbotron w-75 mx-auto pt-5 mt-3 bg-white" style={earningStyle}>
                <Display data={earnings} title="Earning"/>
            </div>
        </div>
    )
}



const earningStyle = {
 //   backgroundColor : '#d8a158',

}