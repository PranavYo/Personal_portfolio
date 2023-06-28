import React from 'react'
import {SectionWrapper} from '../HigherOrderFunction'
import {technologies} from '../constants/index'
import {BallCanvas} from './canvas'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
      >
        <p className={styles.sectionSubText}>What do I know so far?</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className='flex flex-wrap gap-10 justify-center items-center mt-[4rem]'>
        {
          technologies.map((tech, index) => {
            return (
              <motion.div 
                variants={fadeIn('right', 'spring', 0.2*index, 1)}
                className='w-[5rem] h-[5rem]' key={index}
              >
                <BallCanvas icon={tech.icon}/>
              </motion.div>
            )
          })
        }
      </div>
    </>
  )
} 
export default SectionWrapper(Tech, '')