import React from 'react'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../HigherOrderFunction'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../style'
import Tilt from 'react-parallax-tilt'
import { projects } from '../constants'
import { github } from '../assets'

const ProjectCard = (props) => {
  const {index, name, description, tags, image, source_code_link} = props

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index*0.5, 0.75)}
    >
      <Tilt
        className='xs:w-[22rem] w-full bg-tertiary rounded-xl'
        style={{transformStyle: 'preserve-3d'}}
      >
        <div 
          className='w-full p-2 relative'
          style={{transform: 'translateZ(60px)'}}
        >
          <img 
            src={image} alt={name} 
            className='w-full h-full rounded-xl'
            // style={{transform: 'translateZ(60px)'}}
          />
          <div 
            className="absolute flex justify-end m-3 inset-0 z-[100px]"
          >
            <div 
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, '_blank')}
            >
              <img src={github} alt="Github" className='w-1/2 h-1/2' />
            </div>
          </div>
        </div>

        <div 
          className='p-4' 
          // style={{transform: 'translateZ(60px)'}}
        >
          <h3 className="text-white font-bold text-[1.1rem]">{name}</h3>
          <p className="mt-2 text-secondary text-[0.9rem]">{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 p-4'>
          {
            tags.map((tag, index) => {
              return (
                <p key={index} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              )
            })
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div>
      <motion.div
        variants={textVariant(0.1)}
      >
        <p className={styles.sectionSubText}>My work.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('right', '', 0.2, 1)}
        className='mt-4 text-secondary max-w-4xl leading-6'
      >
        Following projects showcases my skills and experience through real-world examples of my work developed in my college and free time.
        Each project is briefly described with links to code repositories and video demos in it. You can find more projects in my GitHub profile.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {
          projects.map((project, index) => {

            return (
              <ProjectCard key={index} index={index} {...project} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'work')