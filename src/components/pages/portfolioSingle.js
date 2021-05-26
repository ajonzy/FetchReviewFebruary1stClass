import React from 'react'

export default function portfolioSingle(props) {
    const portfolioItem = props.data[0]

    if (!portfolioItem) {
        props.history.push("/portfolio")
        return null
    }
    else {
        return (
            <div className='portfolio-single-wrapper'>
                <h3>Portfolio Single</h3>
                <hr/>
                <div className="portfolio-item-wrapper">
                    <h3>{portfolioItem[1]}</h3>
                    <p>{portfolioItem[2]}</p>
                    <a href={portfolioItem[3]}>Click here to visit!</a>
                </div>
            </div>
        )
    }
}