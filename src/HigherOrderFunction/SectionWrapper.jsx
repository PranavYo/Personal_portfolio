// This is used to give the same motion properties to the desired Components without the need of re-writing
//   code of same properties to each and every component.

import { motion } from 'framer-motion'
import { staggerContainer } from "../utils/motion";
import { styles } from '../style'

const SectionWrapper = (Component, secId) => function HOC() {
  return (
    secId === '' ? (<motion.div
        // id={secId}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-[7rem]`}
    >
        <Component />
    </motion.div>)
    :
    (<motion.section
        id={secId}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-[7rem]`}
    >
        <Component />
    </motion.section>)
  )
}

export default SectionWrapper