import { Link,  } from "react-scroll";
import BtnMenu from "./BtnMenu";




const Navbar = ({menuOpen, setMenuOpen}) => {
  console.log(menuOpen)
 function toggleMenu(){
  if (menuOpen) {

    
    setMenuOpen(false)
    
  }else{
    setMenuOpen(true)
  }
 }

 console.log(menuOpen)

  return (
    <div>
      <BtnMenu
       setMenuOpen ={setMenuOpen}
       toggleMenu = {toggleMenu}
       
        /> 
      
        <header className={`navbar-container ${menuOpen ? 'menu-open' : 'menu-close'}`}>
      
        <nav className="navbar">
          <p className="name">John Martinez</p>
          <Link onClick={(e) => setMenuOpen(false)} to="saludo" spy={true} smooth={true} offset={-70} duration={500} className="navbar-a">Home</Link>
          <Link onClick={(e) => setMenuOpen(false)} to="about" spy={true} smooth={true} offset={-70} duration={500} className="navbar-a">About</Link>
          <Link onClick={(e) => setMenuOpen(false)}  to="projects" spy={true} smooth={true} offset={-70} duration={500} className="navbar-a">Projects</Link>
          <div className="btn-contact">
          <Link onClick={(e) => setMenuOpen(false)}  to="contact" spy={true} smooth={true} offset={-70} duration={500} className="btn-contact-hover">Contact me</Link>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default Navbar;
