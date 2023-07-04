import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className={`${styles.paddingX} absolute flex flex-row gap-5 xs:mt-[5rem] sm:mt-[4.5rem] md:mt-[4rem] mt-[5rem]`}>
        <div className="flex flex-col justify-center items-center hero-start mx-[1vw] my-[1vw]">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:40 h-80 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Pranav</span></h1>
          <p className={`${styles.heroSubText} mr-[4vw] text-white-100`}>Welcome,<br/> I'm a Full-Stack Developer and Competitive Programmer.</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-5 w-full flex justify-center items-center">
        <ScrollLink 
          to={'about'}
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
        >
          <div className='w-[1.5rem] h-[3rem] rounded-3xl border-[#915eff] border-[2.5px] flex justify-center cursor-pointer p-1'>
            <motion.div 
              animate={{y: [0, 21, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-[#915eff]'
            />
          </div>
        </ScrollLink>
      </div>
    </div>
  )
}

export default Hero