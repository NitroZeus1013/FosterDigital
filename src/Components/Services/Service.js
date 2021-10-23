import React from 'react'
import Description from './Description.js';
import FAQs from './FAQs.js';
import Footer from '../Footer'
import KeyPoints from './KeyPoints.js';
import './service.css'

function Service({data}) {
    console.log(data)
    return (
        <>
        
            
            <div className="service--hero-image">
                <div className="quote">
                <i><p>{data.quote.quo}</p></i>
                <i className="author__name">{data.quote.auth}</i>
                </div>
                <img src={data.heroImage?data.heroImage:"./allImages/seo_main.jpg"} alt=""  />
            </div>

           
          <Description desc={data.description} title={data.title} image={data.image}/>
          <KeyPoints keyp={data.keypoints} title={data.title}/>
          <FAQs faqs={data.faqs}/>

        
        <Footer />
        </>
    )
}

export default Service;
