import React from 'react'

function Feature({logo,title,content}) {
    return (
        <div className="feature--card">
            <img src={logo} alt="" />
            <p className="feature--title">{title}</p>
            <p className="feature--content">
                {content}
            </p>
        </div>
    )
}

export default Feature
