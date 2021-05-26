import React, { useState, useEffect } from 'react'

export default function calendarSingle(props) {
    const [data, setData] = useState({})

    useEffect(() => {
        const params = props.match.params

        fetch(`https://aoj-calendar-app-february1st.herokuapp.com/month/get/${params.month}/${params.year}`)
        .then(response => response.json())
        .then(responseData => setData(responseData))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className='calendar-single-wrapper'>
            <h3>Calendar Single</h3>
            <hr/>
            <div className="month-wrapper">
                <h3>{data.name}</h3>
                <h4>{data.year}</h4>
            </div>
        </div>
    )
}