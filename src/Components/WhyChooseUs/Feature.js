import React,{useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const whyVariants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

function Feature({ logo, title, content, time }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) control.start("visible");
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={whyVariants}
      animate={control}
      initial="hidden"
      className="feature--card"
    >
      <img src={logo} alt="" />
      <p className="feature--title">{title}</p>
      <p className="feature--content">{content}</p>
    </motion.div>
  );
}

export default Feature;
