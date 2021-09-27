import React from 'react'
import { GiDesert } from 'react-icons/gi';
import seo from '../../images/SEO.jpg';
import './card.css';

function Card({image,logo,title,description,action}) {
    return (
        <div className="card">
            <div className="card--image">
            <img src={image} alt="services images"/>
            </div>
            <div className="card--content">
                <img src="" alt="logo"  className="card--logo"/>
                <h3 className="card--title">
                    {title}
                </h3>
                <p className="card--description">
                    {description}
                </p>
                <button className="card--button" onClick={action}>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Card
