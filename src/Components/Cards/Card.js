import React from 'react'
import { GiDesert } from 'react-icons/gi';

import './card.css';

function Card({image,logo,title,description,action}) {
    return (
        <div className="card">
            <div className="card--image">
            <img src={image} alt="services images"/>
            </div>
            <div className="card--content">
                <div className="card--logo">
                <img src={logo} alt="logo" />
                </div>
                <h3 className="card--title">
                    {title}
                </h3>
                <p className="card--description">
                    {description}
                </p>
                <button className="card--button" >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Card
