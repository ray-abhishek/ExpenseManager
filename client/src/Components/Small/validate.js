
export default function validate(optionVal,amount,amountType, balanceAmount){

    amount = Number(amount)
    if(optionVal==='' || optionVal==='Choose' || typeof optionVal!=='string'){
        return "Invalid Category" 
    }
    if(amount===0 && amount!=null){
        return "Invalid Amount" 
    }
    if(amountType==='Expense' && amount>balanceAmount){
        return "You don't have enough balance" 
    }
    return "Proceed"
    
}