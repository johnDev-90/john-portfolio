import { useState, useEffect } from "react"
import Skills from "./Skills";
import { Element } from "react-scroll";



const About = () => {

    const [value, setValue] = useState(0);
    const dynamicWords = ['Freelancer', 'Coffeeholic', 'Developer', 'Problem Solver'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setValue((prevValue) => (prevValue + 1) % dynamicWords.length);
      }, 1000); 
  
      return () => clearInterval(intervalId);
    }, []); 


  return (
  <Element name="about">
    <div className='about-container'>
        <section className='about-text contenedor'>
            <h2 className="some-about">Some about me</h2>
            <p className="dynamicText">{dynamicWords[value]}</p>
            <p>I am John, a passionate freelancer from El Salvador, My main area of expertise is front-end development. HTML, CSS, JS, React building small and medium web applications with custom plugins, features, animations, and coding interactive layouts.</p>
            <p>Visit my LinkedIn for more details.</p>
            <p>My specialty is creating next-level websites.</p>
        </section>
        <h2 className="mySkills-text">My Skills</h2>
        <Skills />
     
    
    </div>
  </Element>
  )
}

export default About
