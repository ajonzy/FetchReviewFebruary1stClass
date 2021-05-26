import React, { useState, useEffect } from 'react'

export default function portfolio(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://aj-portfolio-api-project.herokuapp.com/portfolio-item/get-all")
        .then(response => response.json())
        .then(responseData => {
            setData(responseData)
            props.updatePortfolioData(responseData)
        })
        .catch(error => console.log(error))
    }, [])

    const renderItems = () => {
        return data.map(item => {
            return (
                <div key={item[0]} className="portfolio-item-wrapper">
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                    <a href={item[3]}>Click here to visit!</a>
                </div>
            )
        })
    }

    return (
        <div className='porfolio-wrapper'>
            <h3>Portfolio</h3>
            <hr/>
            {renderItems()}
        </div>
    )
}