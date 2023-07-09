import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

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
          <p className={`${styles.heroSubText} mr-[4vw] mt-[2vh] text-white-100`}>Welcome, I'm a&nbsp;
            {/* I'm a Full-Stack Developer and Competitive Programmer. */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Front-end developer.',
                1000, // wait 1s
                'Back-end developer.',
                1000,
                'Problem solver.',
                1000,
                'DSA enthusiast.',
                1000
              ]}
              wrapper="span"
              speed={70}
              style={{ color:  '#915eff'}}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xxs:bottom-[15rem] xs:bottom-[10rem] sm:bottom-10 lg:bottom-5 bottom-5 w-full flex justify-center items-center">
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