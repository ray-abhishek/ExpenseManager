import React from 'react'
import Home from '../Components/Pages/Home.jsx'
import Expense from '../Components/Pages/Expense'
import Earning from '../Components/Pages/Earning'
import { Switch , Route } from 'react-router'

export default function Routes(){

    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/expense" render={(props)=><Expense {...props}/>}/>
            <Route path="/earning" render={(props)=><Earning {...props}/>}/>
        </Switch>
    )
}