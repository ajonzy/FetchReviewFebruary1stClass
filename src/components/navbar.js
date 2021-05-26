import React from 'react'
import { NavLink, Link } from "react-router-dom"

export default function navbar() {
    return (
        <div className='navbar-wrapper'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/portfolio">Portfolio</NavLink>
            <NavLink exact to="/calendar">Calendar</NavLink>
            <NavLink exact to="/file">File</NavLink>
            <Link to="/portfolio/single">Porfolio Single</Link>
            <Link to="/calendar/single/April/2021">Calendar Single</Link>
            <Link to="/file/single">File Single</Link>
        </div>
    )
}