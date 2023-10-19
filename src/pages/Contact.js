import "./css/contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kysr69f",
        "template_gk5ywaw",
        form.current,
        "SZw9d-_lm-v_LFWwt"
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
    <section className="get-in-touch">
      <h1 className="title">Get in touch</h1>
      <form ref={form} className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required
          />
          <label className="label" htmlFor="name">
            Name
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="email"
            className="input-text js-input"
            type="email"
            required
          />
          <label className="label" htmlFor="email">
            E-mail
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="phone"
            className="input-text js-input"
            type="text"
            required
          />
          <label className="label" htmlFor="phone">
            Contact Number
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="subject"
            className="input-text js-input"
            type="text"
            required
          />
          <label className="label" htmlFor="subject">
            Subject
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input
            id="message"
            className="input-text js-input"
            type="text"
            required
          />
          <label className="label" htmlFor="message">
            Message
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="submit" defaultValue="Submit" onSubmit={sendEmail}/>
        </div>
      </form>
    </section>
  );
};
