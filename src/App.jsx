import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Components/Navbar";
import Saludo from "./Components/Saludo";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const emailobj = { name, lastName, email, message };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (Object.values(emailobj).includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
      setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 3000);
    }, 2000);

    emailjs
      .sendForm(
        "service_q59e57p",
        "template_8vxhy6y",
        form.current,
        "HcpRUuhjSbdadfqOb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      <Saludo />

      <About />
      <Projects />
      <Contact
        setName={setName}
        setLastName={setLastName}
        setEmail={setEmail}
        setMessage={setMessage}
        form={form}
        sendEmail={sendEmail}
        error={error}
        name={name}
        lastName={lastName}
        email={email}
        message={message}
        modal={modal}
        spinner={spinner}
      />
    </div>
  );
}

export default App;
