import React, { useContext } from 'react'
import Ticker from '../Small/Ticker'
import { AppContext } from '../../AppContext/AppContext'
import axios from 'axios'
import Display from '../../Components/Small/Display'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let { fetchSummary, fetchExpenses, fetchEarnings , fetchCategories} = this.context
        
        fetchSummary()
        fetchExpenses()
        fetchEarnings()
        fetchCategories()

    }
    render(){
        let { expenses , earnings , totalEarned , totalSpent, balanceAmount } = this.context
        return(
            <div className="container p-5 w-75 mx-auto justify-content-center align-items-center" style={homeContainerStyle}>
                <div className="row mx-auto d-flex justify-content-between">
                <Ticker amount={totalEarned}  title="Total Earned" styl={totalEarnedStyle}/>

                <Ticker amount={totalSpent} title="Total Spent" styl={totalSpentStyle}/>

                <Ticker amount={balanceAmount} title="Balance Amount" styl={balanceAmountStyle} />
                </div>

                <div className="row mt-5">
                    <div className="col" style={{height:'450px'}}>
                        <h2 className="display-4">Expenses</h2>
                        <Display data={expenses} title="Expenses"/>
                    </div>
                    <div className="col" style={{height:'450px'}}>
                        <h2 className="display-4">Earnings</h2>
                        <Display data={earnings} title="Earnings"/>
                    </div>
                </div>
            </div>
        )
    }
}
Home.contextType = AppContext
export default Home

const totalEarnedStyle = {
    fontSize : '2.2rem',
    color : 'black'
}

const totalSpentStyle = {
    fontSize : '1.6rem',
    color : 'black'
}

const balanceAmountStyle = {
    fontSize : '1.6rem',
    color : 'black'
}

const homeContainerStyle = {
    minHeight : '85vh',
    
}