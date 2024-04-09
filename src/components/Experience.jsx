import React from 'react'
import {SectionWrapper} from '../HigherOrderFunction'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../style'
import {experiences} from '../constants'
import {textVariant} from '../utils/motion'

const ExperienceCard = (props) => {
  const {experience} = props

  return (
    <VerticalTimelineElement
      contentStyle={{backgroundColor: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{backgroundColor: experience.iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%]' />
        </div>
      }
    >
      <div className=''>
        <h3 className='text-white font-bold text-[1.5rem]'>{experience.title}</h3>
        <p className='text-secondary text-[1rem] font-semibold' style={{margin: '0'}}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-8 space-y-2'>
        {
          experience.points.map((point, index) => {
            return (
              <li key={index} className='text-white-100 text-[1rem] pl-1 tracking-wider'>
                {point}
              </li>
            )
          })
        }
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
      >
        <p className={styles.sectionSubText}>What have I done so far?</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-[2rem] flex flex-col justify-start">
        <VerticalTimeline>
          {
            experiences.map((item, index) => {
              return (
                <ExperienceCard key={index} experience={item}/>
              )
            })
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, '')