import React,{useState} from 'react'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
function FAq({fq}) {
    console.log(fq)
    const [open ,setOpen] =useState(false);
    const faqHandler = () =>{
        setOpen(!open);
    }
    return (
        <div className="faq">
            <div className="faq__header">
            <li><span>{fq.que}</span></li>
            <button onClick={faqHandler}>
            {open?<BiChevronUp/>:<BiChevronDown/>}
            </button>
            </div>
           {

            open && <div className="faq__answer">
                {fq.ans}
            </div>
           }
        </div>
    )
}

export default FAq
