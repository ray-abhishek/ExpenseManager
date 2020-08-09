import React from 'react'

export default function Display({data, title}){

    return (
  
        <table className="table text-center border">
                    <thead className="thead thead-dark">
                        <tr>
                            <th>S.No</th>
                            <th>{title}</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map(item=>{
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

    )
}