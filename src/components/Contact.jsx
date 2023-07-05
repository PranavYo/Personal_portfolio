import React, { useContext, useState } from 'react'
import {SectionWrapper} from '../HigherOrderFunction'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import emailjs from '@emailjs/browser'
import {StarsCanvas} from './canvas'
import AlertContext from '../context/Alerts/AlertContext'

const Contact = () => {

  const {showAlert} = useContext(AlertContext)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleOnChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_2g1ubas',
      'template_3ohwyy6',
      {
        from_name: form.name,
        to_name: 'Pranav',
        from_email: form.email,
        to_email: 'dpranav222@gmail.com',
        message: form.message
      },
      'QEqkNvi1Gw2u8dEGS'
    )
    .then(() => {
      setLoading(false)
      // alert('Thank you. I will get back to you as soon as possible.')
      showAlert('Thank you. I will get back to you as soon as possible.', 'success', 'Success')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      // alert('Something went wrong!')
      showAlert('Something went wrong! Mail to: dpranav222@gmail.com', 'warning', 'Failed')
    })
    
  }

  return (
    <div 
      // id='contact'
    >
      <div className='xl:mt-12 xl:flex-row flex flex-col-reverse justify-between gap-10 relative z-0'>
        <motion.div
          variants={slideIn('left', 'tween', 0.3, 1)}
          className=' flex-[0.75] bg-black-100 p-7 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch.</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            // ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label htmlFor="" className='flex flex-col'>
              <span className='text-white font-medium mb-4 ml-4'>Your Name</span>
              <input type="text" name='name' value={form.name} onChange={handleOnChange} placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label htmlFor="" className='flex flex-col'>
              <span className='text-white font-medium mb-4 ml-4'>Your Email</span>
              <input type="email" name='email' value={form.email} onChange={handleOnChange} placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label htmlFor="" className='flex flex-col'>
              <span className='text-white font-medium mb-4 ml-4'>Your Name</span>
              <textarea name='message' rows={6} value={form.message} onChange={handleOnChange} placeholder="What's your message?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>

            <button type='submit' className='bg-tertiary px-6 py-2 self-center rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-md shadow-primary'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 1, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <StarsCanvas/>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')