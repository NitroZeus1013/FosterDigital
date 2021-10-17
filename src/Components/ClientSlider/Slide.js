import React from "react";
function Slide({client,active}) {
  return (
    <>
      <div className="client--slide" ref= {active}>
        <h3>
        {client.comment}
        </h3>
      </div>
      
    </>
  );
}

export default Slide;
