import React from 'react'
import { Link } from 'react-router-dom'

export default function Links(){

    const navlinks = [
        {
            "link":'Add Expense',
            "route":'/expense'
        },
        {
            "link":'Add Earning',
            "route":'/earning'
        }
    ]

    const listitems = navlinks.map(navlink => {
        return <li className="nav-item">
            <Link className="nav-link mr-5 text-light font-weight-bold" to={navlink.route}>{navlink.link}</Link>
        </li>
    })

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success">

            <Link className="navbar-brand text-light font-weight-bold d-flex  ml-md-5 align-items-center" to="/">Expense Manager</Link>
            
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navToggler">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 p-4">
                    {
                        listitems.map(listitem=>listitem)
                    }
                </ul>
            </div>

        </nav>
    )
}
