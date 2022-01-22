import React,{useEffect} from 'react'
import styles from './hr.module.css';

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const hrVariant = {
    visible:{
       scale:1,
       opacity:1,
       transition:{duration:.5}
    },
    hidden:{
        scale:.5,
        opacity:0
    }
}


function HR({width,color="black"}) {
    const control = useAnimation();
    const [ref,inView] = useInView();

    useEffect(()=>{
        if(inView)
        control.start('visible')

    },[control,inView])

    return (
        <motion.hr className={styles.hrclass} style={{width,background:color}}
            variants = {hrVariant}
            initial = 'hidden'
            animate = {control}
            ref = {ref}
        />
    )
}

export default HR;
