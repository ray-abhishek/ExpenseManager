import React from 'react'

export default function Ticker({amount, title, styl}){
    console.log(amount, title," are amount, title")
    return(
        <div className="d-flex flex-column justify-content-center align-items-center " >
            <h1 style={styl} className="display-4">{amount}</h1>
            <h3 style={styl} className="display-4">{title}</h3>
        </div>
    )
}