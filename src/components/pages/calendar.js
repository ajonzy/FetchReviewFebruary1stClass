import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function calendar() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://aoj-calendar-app-february1st.herokuapp.com/month/get")
        .then(response => response.json())
        .then(responseData => setData(responseData))
        .catch(error => console.log(error))
    }, [])

    const renderData = () => {
        return data.map(month => {
            return (
                <Link to={`/calendar/single/${month.name}/${month.year}`}>
                    <div key={month.id} className="month-wrapper">
                        <h3>{month.name}</h3>
                        <h4>{month.year}</h4>
                    </div>
                </Link>
            )
        })
    }

    return (
        <div className='calendar-wrapper'>
            <h3>Calendar</h3>
            <hr/>
            {renderData()}
        </div>
    )
}