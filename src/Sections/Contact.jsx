import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY})
      .then((result) => {
        toast.success("Message sent!", {
              position: "bottom-right"
        });
        form.current.reset();
      }, (error) => {
        toast.error("Unable to send message", {
              position: "bottom-right"
            });
      });
  };

  return (
    <div id="contact">
      <div className="left">
        <h2>Let's connect.</h2>
        <p>Feel free to shoot me a message if you are interested in my work, would like to collaborate, or just to say hi! </p>
      </div>
      <div className="right">
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <input class="name" type="text" name="user_name" placeholder="Name" />
          <input class="email" type="email" name="user_email" placeholder="Email" />
          <textarea class="message" name="message" rows='10' placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
