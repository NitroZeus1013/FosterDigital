import React from "react";

function Description({desc}) {
  
  return (
    <div className="services--description">
    
      <h3>Why SEO is needed ?</h3>
      <div className="content">
        <div className="services__description__image">
          <img src="/allImages/SEOEdited.png" alt="" />
        </div>
        <div className="description">
            <p>
              {desc}
            </p>
            <button className="description__button">Get a Proposal</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
