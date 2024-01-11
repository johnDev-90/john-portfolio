import { useEffect, useState } from 'react';
import johnimg from '../img/john.jpn.webp';
import BtnCv from './BtnCv';
import { Element } from 'react-scroll';
import {Link} from 'react-scroll';


const Saludo = () => {
  

  return (

    <Element name='saludo'>
    <div className="contenedor main-section">
  
        <div className='grid-saludo'>
        
            <main>
           
                <h1 className="title">Web Developer</h1>
                    <div className="saludo-text">
                    <p>Hello World</p>
                    <p>I'm <span className='john'>John</span></p>
                    <p className='iam'>Front-end Developer</p>
                    </div>
                    <p className='description-text'>
                    "Web developer with a flair for HTML, CSS, JS, Tailwind, and React. Crafting visually appealing sites for the digital era. Let's shape the online future together!"
                    </p>
                    <div className='lets-talk'>
                    <p>Let's talk!</p>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} >
                    <div className='incone'>
                    
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                   
                    </div>
                    </Link>
                    </div>
            </main>
            <div className="secction-img">
            
                <div className='img'>
                    <div>
                    <BtnCv />
                    </div>
                   
                <img className='imagen-saludo' src={johnimg} alt=""  />
                
                </div>

            </div>

        </div>
     

    </div>
    </Element>
  )
}

export default Saludo
