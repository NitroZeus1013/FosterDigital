import React from "react";
import { motion ,AnimatePresence} from "framer-motion";



const slideVariants={
  visible:{
    x:0,
    transition:{
      delay:0.2,
      stiffness:120

    }
  },
  hidden:{
    x:'-100vw'
  },
  exit:{
    opacity:0,
    transition:{
      ease:'easeInOut'
    }
  }
}


function Slide({val,index,current,showSlide}) {
  return (
    <>
    
     
      
    </>
  );
}

export default Slide;
