import React from "react";
import HR from '../utils/HR'

function Description({desc,title,image}) {
  
  return (
    <div className="services--description">
    
      <p>Why {title} is needed ?</p>
      <HR/>
      <div className="content">
        <div className="services__description__image">
          <img src={image?image:"./allImages/SEOEdited.png"} alt="" />
        </div>
        <div className="description">
            <p>
              {desc}
            </p>
        </div>

      </div>
      <button className="description__button">Get a Proposal</button>
    
    </div>
  );
}

export default Description;
