import React, { useState, useRef, useEffect } from 'react'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { Link as ScrollLink } from 'react-scroll'
import '../App.css'
import { CSSTransition } from 'react-transition-group'

const Navbar = () => {

  const [currentPath, setcurrentPath] = useState('/')
  const [toggleMenu, settoggleMenu] = useState(false)
  const [menuImgSrc, setMenuImgSrc] = useState(menu)
  const [menuOn, setmenuOn] = useState(false)

  const imgRef = useRef(null)
  const menuContainer = useRef(null)

  const toggleMenuImg = () => {
    if(menuImgSrc === menu) {
      setTimeout(() => {
        setMenuImgSrc(close)
      }, 200);
    }
    else {
      setTimeout(() => {
        setMenuImgSrc(menu)
      }, 200);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      let updated = false

      const allSections = document.querySelectorAll('section')
      for(let i=0;i<allSections.length;i++) {
        const sectionTopPos = allSections[i].offsetTop
        const sectionBottomPos = sectionTopPos + allSections[i].offsetHeight
        
        // console.log(allSections[i].id, sectionTopPos, sectionBottomPos, allSections.length);

        if(allSections[i].id !== '' && currentScrollPos >= sectionTopPos && currentScrollPos < sectionBottomPos) {
          setcurrentPath(allSections[i].id)
          updated = true
          break
        }
      }
      // if(!updated) setcurrentPath('/')
    }

    window.addEventListener('scroll', handleScroll, {passive: true})
  
    return () => {
      window.removeEventListener('scroll', handleScroll, {passive: true})
      // Removes the event when this Component Unmounts.
    }
  }, []) // To make the snippet execute only once, even when something changes.

  return (
    <section id='/'>
      <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <ScrollLink 
            to={'/'}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='flex items-center gap-2'
          >
            <img src={logo} alt="logo" className='w-12 object-contain cursor-pointer'/>
            <p className='font-bold cursor-pointer text-[1.4rem]'>Pranav</p>
          </ScrollLink>

          <ul className='ul-list list-none sm:flex flex gap-10 items-center'>
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${currentPath === link.id ? 'text-[#915eff]' : 'text-secondary'} cursor-pointer ease-in-out duration-100 hover:text-[#915eff]`}
              >
                <ScrollLink 
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setcurrentPath(link.id)}
                  className={`${currentPath === link.id ? 'text-[1.2rem]' : ''} ease-in-out duration-500`}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* nav for mobiles */}
          <div className="sm:hidden flex justify-center items-center flex-col relative">
            <CSSTransition
              nodeRef={imgRef}
              in={menuOn}
              timeout={300}
              classNames='menu-transition'
            >
              <img ref={imgRef} src={menuImgSrc} alt="menu" className='w-[1.1rem] h-[1.1rem] object-contain cursor-pointer' 
                onClick={() => {
                  toggleMenuImg() 
                  setmenuOn(!menuOn)}
                } 
              />
            </CSSTransition>
            <CSSTransition
              nodeRef={menuContainer}
              in={menuOn}
              timeout={500}
              classNames='menu-nav-mob'
              unmountOnExit
            >
              <div ref={menuContainer} className='flex bg-gradient-to-br from-black from-50% to-violet-500 rounded-lg p-6 absolute z-10 top-5 right-5'>
                <ul className='ul-list-mobile list-none flex flex-col gap-4 items-center'>
                  {navLinks.map((link) => (
                    <li 
                      key={link.id} 
                      className={`${currentPath === link.id ? 'text-[#915eff]' : 'text-secondary'} cursor-pointer ease-in-out duration-100 hover:text-[#915eff]`}
                    >
                      <ScrollLink 
                        to={link.id}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={() => setcurrentPath(link.id)}
                        className={`${currentPath === link.id ? 'text-[1.2rem]' : ''} ease-in-out duration-300`}
                      >
                        {link.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            </CSSTransition>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar