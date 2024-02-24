import React from "react";
import portf from "../img/portf.webp";
import crypto from "../img/crypto.webp";
import myp from "../img/myp.webp";
import news from "../img/news.webp";
import registroP from "../img/registroPacientes.webp";
import loan from "../img/loan.webp";
import netli from "../img/netli.png";
import gutIcon from "../img/githubIcon.png";
import vercelImg from '../img/vercel.png'
import guitarLa from '../img/GuitarLa.png'
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <section className="contenedor projects-sections">
        <h2>My Projects</h2>

        <div className="card-container">

        <div className="card">
            <img className="projects-imagen" src={guitarLa} alt="Here goes the image" />
            <div className="project-description">
              <p>GuitarLA React, Strapi + PostgreSQL</p>
             
            </div>
            <div className="btn-code">
              <div className="btn-deploy">
                <img src={vercelImg} alt="Here goes the image" />
                <a href="https://guitar-la-react-three.vercel.app/" target="blank">Deploy</a>
              </div>
              <div className="btn-deploy">
                <img src={gutIcon} alt="Here goes the image" />
                <a
                  href="https://github.com/johnDev-90/GuitarLAReact"
                  target="blank"
                >
                  View code
                </a>
              </div>
            </div>
          </div>

        <div className="card">
            <img className="projects-imagen" src={registroP} alt="Here goes the image" />
            <div className="project-description">
              <p>Customer Registration - Veterinary. ReacJS + Vite</p>
             
            </div>
            <div className="btn-code">
              <div className="btn-deploy">
                <img src={netli} alt="Here goes the image" />
                <a href="https://serene-scone-8b400e.netlify.app/" target="blank">Deploy</a>
              </div>
              <div className="btn-deploy">
                <img src={gutIcon} alt="Here goes the image" />
                <a
                  href="https://github.com/johnDev-90/pacientes-react.git"
                  target="blank"
                >
                  View code
                </a>
              </div>
            </div>
          </div>
          

          <div className="card">
            <img className="projects-imagen" src={crypto} alt="" />
            <div className="project-description">
              <p>CryptoTracker - A ReactJS + ViteJS Projec</p>
             
            </div>
            <div className="btn-code">
              <div className="btn-deploy">
                <img src={netli} alt="icone IMG" />
                <a
                  href="https://zingy-twilight-6c832f.netlify.app/"
                  target="blank"
                >
                  Deploy
                </a>
              </div>
              <div className="btn-deploy">
                <img src={gutIcon} alt="Imagen" />
                <a
                  href="https://github.com/johnDev-90/cryptocurrency.git"
                  target="blank"
                >
                  View code
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <img className="projects-imagen" src={myp} alt="" />
            <div className="project-description">
             <p>Website for an Accounting Firm - Developed with HTML, CSS, and JavaScript</p>
             
            </div>
            <div className="btn-code">
              <div className="btn-deploy">
                <img src={netli} alt="icone IMG" />
                <a href="https://mypconsulting.com/" target="blank">
                  Deploy
                </a>
              </div>
              <div className="btn-deploy">
                <img src={gutIcon} alt="Imagen" />
                <a
                  href="https://github.com/johnDev-90/MyP-Consulting.git"
                  target="blank"
                >
                  View code
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <img className="projects-imagen" src={news} alt="" />
            <div className="project-description">
              <p className="text-left">News & Blogs - HTML CSS and JavaScript</p>

            </div>
            <div className="btn-code">
              <div className="btn-deploy">
                <img src={netli} alt="icone IMG" />
                <a href="https://beautiful-douhua-51e1af.netlify.app/" target="blank">Deploy</a>
              </div>
              <div className="btn-deploy">
                <img src={gutIcon} alt="Imagen" />
                <a
                  href="https://github.com/johnDev-90/Noticias-Clima.git"
                  target="blank"
                >
                  View code
                </a>
              </div>
            </div>
          </div>

         

          <div className="card">
            <img className="projects-imagen" src={portf} alt="" />
            <div className="project-description">
              <p>Portfolio React + Vitejs</p>
        
            </div>
            <div className="btn-code">
              <div className="btn-deploy">
                <img src={netli} alt="icone IMG" />
                <a href="">Deploy</a>
              </div>
              <div className="btn-deploy">
                <img src={gutIcon} alt="Imagen" />
                <a
                  href="https://github.com/johnDev-90/CRM-RRD.git"
                  target="blank"
                >
                  View code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
