import React from 'react'

export default function notFound(props) {
    return (
        <div className='not-found'>
            <h3>404 Page not found...</h3>
            <button onClick={() => props.history.push("/")}>Get me out of here!</button>
        </div>
    )
}