import React from "react";
function Slide({client}) {
  return (
    <>
      <div className="client--slide">
        <h3>
        {client.comment}
        </h3>
      </div>
      
    </>
  );
}

export default Slide;
