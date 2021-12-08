import React from 'react'
import './styles.css'
const Card = (props) => {
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <div className="content">{props.children}</div>
        </div>
    )
}

export default Card