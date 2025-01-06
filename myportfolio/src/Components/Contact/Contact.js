import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_b9ymxl7',
      'template_w4hf4tk',
      form.current,
      'HQxZuIvZ8c3vRxI2k'
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>ankitrimal33@gmail.com</h5>
            <a href="mailto:ankitrimal33@gmail.com" className="btn-link">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__icon" />
            <h4>Messenger</h4>
            <h5>Ankit Rimal</h5>
            <a
              href="https://m.me/ankit.rimal.7468"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>9867295007</h5>
            <a
              href="https://wa.me/+9779867295007"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Form Section */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
