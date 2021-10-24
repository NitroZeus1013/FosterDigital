import React from 'react'
import FAq from './FAq'

function FAQs({faqs}) {
    console.log(faqs)
    return (
        
        <div className="services--faqs">
        <p>FAQs</p>
        <hr />
        
        {
            faqs.map((fq,index)=>{
            return <FAq
                key={index}
                fq={fq}
             />           

            })
        }
        </div>

    )
}

export default FAQs
