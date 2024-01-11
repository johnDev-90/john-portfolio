
import IconGithub from './GithubIcon';
import IconBxlLinkedin from './LinkedinIcon'
import ErrorMessaage from './ErrorMessaage';
import Modal from './Modal';
import { Element } from 'react-scroll';


import Spinner from './Spinner';


const Contact = ({ 
setName, 
setLastName, 
setEmail, 
setMessage, 
form, 
sendEmail,
 error,
 name,
 lastName,
 email,
 message,
 modal,
 spinner
}) => {

  return (
    <Element name='contact'>
    <div className='contact-section form-container contenedor'>
       <section>
        {error && <ErrorMessaage />}
        {spinner && <Spinner/>}
        {modal &&  <Modal /> }



       <h2>Contact with Me </h2>
     

        <form className='form' ref={form} onSubmit={sendEmail}>
         
          <div className='inputs'>
            
            <input onChange={ (e) => setName(e.target.value)} className='input-field' id='name' type="text" placeholder='Name'name="user_name"
                value={name}
            />
     
          </div>
          <div className='inputs'>
            
            <input value={lastName} onChange={ (e) => setLastName(e.target.value)} className='input-field' id='lastName' type="text" placeholder='Last Name' name="user_name" />
          </div>
          <div className='inputs'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' id='email' type="email" placeholder='Your email address' name="user_email" />
          </div>
          <div className='inputs'>
            <input value={message} onChange={(e) => setMessage(e.target.value)} className='input-field' id='message' type="text" placeholder='Message' name="message" />
          </div>
        
          <input className='btn-sent' type="submit" 
          value="Send"
          />
         
          
        </form>
        
       </section>

        <section className='fill-text-container'>
         
            <div className='fill-text'>
                <p>
                Got a problem to solve? Get your space suit ready and tell me your ideas to develop your dream website.
                </p>
            </div>
       
       
            <div className='work-container'>
                <p>Let's Work!</p>
                
                <div className='logos-container'>
              <a href='https://github.com/johnDev-90?tab=repositories' target='blank'><IconGithub/></a>
              <a href='https://www.linkedin.com/in/john-martinez-developer/' target='blank'><IconBxlLinkedin /></a>
              
            
                </div>

            </div>
       
           
        </section>
        
    </div>
    </Element>
  )
}

export default Contact
