import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yqgecly', 'template_hn3a4bc', form.current, 'FfZuNODeZi9Im9Vbp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <h1>Let's connect.</h1>
      <p>Feel free to shoot me a message if you are interested in my work, would like to collaborate, or just to say hi! </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact
