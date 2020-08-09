import React, { useState, useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import  { v4 as uuidv4 } from 'uuid'
import validate from './validate'

export default function Form({title, amount, amountType, addItem,setAmount}){

    const [ toggleSelect , setToggleSelect ] = useState(false)
    const [ type , setType ] = useState('')
    const { categories, addCategory, balanceAmount } = useContext(AppContext)
    const [ optionVal, setOptionVal ] = useState('')
    const addToCategoryList = (categoryItem) => {
        if(categories.includes(categoryItem)){
            alert("Entered category is already present")
        }
        else{
            console.log(categoryItem, "is categoryItem")
            addCategory({"category":categoryItem})
            setToggleSelect(false)
        }
    }


    return(
        <form className="d-flex w-75 mx-auto justify-content-center align-items-start" onSubmit={(e)=>{
            e.preventDefault()
            let message = validate(optionVal,amount,amountType, balanceAmount) 

            message==='Proceed' ? addItem({"name":optionVal,"amount":amount,"date":getCurrentDate()}) : alert(message)
        }}>
            <div className="form-group m-3" style={selectStyle}>
                <label  for="category">Category</label>
                {toggleSelect===false ? 
                    <div className="border-select">
                    <select id="category" className="form-control" value={optionVal} onChange={(e)=>setOptionVal(e.target.value)}>
                        <option selected>Choose</option>
                     {   categories && categories.map(category => {
                         console.log(category," is category")
                            return <option key={uuidv4()}>{category['category']}</option>
                        })
                    }
                    </select>
                    </div> :
                    <div className="input-group">
                        
                    <input className="form-control" id="earning" value={type} onChange={(e)=>setType(e.target.value)} placeholder="Enter Category. . ."/>
                    <div class="input-group-prepend">
                        <div class="input-group-text" onClick={()=>setToggleSelect(false)}>&#10006;</div>
                        </div>
                    </div>
                }
                
                <small class="form-text text-danger" onClick={ toggleSelect && type.length>0 ? ()=>addToCategoryList(type) : ()=>setToggleSelect(true)}>Add Category</small>
            </div>
            <div className="form-group m-3 ">
                <label  for="amount">Amount</label>
                <input className="form-control" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button type="submit" className="m-3 mt-5 btn btn-success">{title}</button>
        </form>
    )
}

function getCurrentDate(){
    const currentTime = new Date(Date.now())
    const currentDate = currentTime.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    console.log(currentDate, " is currentDate")
    return currentDate  
}

const selectStyle = {
    flexBasis : '314px',
    border : 'solid black 2px !important'
}

