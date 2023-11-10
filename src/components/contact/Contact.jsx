import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import BackButton from "../BackButton";

const Contact = () => {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputText = useRef();
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    );
  }, []);

  const onSend = () => {
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputText.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      inputName.current.value === "" ||
      inputEmail.current.value === "" ||
      inputText.current.value === ""
    ) {
      alert("Please fill in all the fields before sending");
    } else {
      emailjs
        .sendForm(
          "service_t9ibtap",
          "template_asbrub7",
          form.current,
          "OeQvuWjJmE21Mn45M"
        )
        .then(
          (result) => {
            alert(result.text + "- Email Sent!");
            onSend();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <section className="contactContainer" ref={contactRef}>
        <h1 className="contactTitle">Contact</h1>
        <div className="formContainer">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>
              <div>Name</div>
              <input
                ref={inputName}
                className="formInput"
                type="text"
                name="user_name"
              />
            </label>
            <label>
              <div>Email</div>
              <input
                ref={inputEmail}
                className="formInput"
                type="email"
                name="user_email"
              />
            </label>
            <label>
              <div>Message</div>
              <textarea ref={inputText} className="formInput" name="message" />
            </label>
            <div className="sendButton">
              <input type="submit" value="Send" className="submitButton" />
            </div>
          </form>
        </div>
        <BackButton />
      </section>
    </>
  );
};

export default Contact;
