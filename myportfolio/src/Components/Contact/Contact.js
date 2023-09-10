import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import   "./Contact.css"
import emailjs from "emailjs-com"
import {useRef} from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b9ymxl7', 'template_w4hf4tk', form.current, 'HQxZuIvZ8c3vRxI2k')
        e.target.reset()
       
      };
  return (
<section id='contact'>
    <h5> Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
        <div className='contact__option'>
            <article className='contact__option'>
                <MdOutlineEmail/>
                <h4>Email</h4>
                <h6>ankitrimal33@gmail.com</h6>
                <a href='mailto:ankitrimal33@gmail.com'>Send a message</a>
            </article>
            <article className='contact__option'>
                <BsMessenger/>
                <h4>Messenger</h4>
                <h6>Ankit Rimal</h6>
                <a href='https://m.me/ankit.rimal.7468'>Send a message</a>
            </article>
            <article className='contact__option'>
                <BsWhatsapp/>
                <h4>What'sApp</h4>
                <h6>9867295007</h6>
                <a href="https://wa.me/+9779867295007" target="_blank">
							Send a message
						</a>            </article>
                        

        </div>
    <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message'  required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    </div>

</section> 
        )
}

<hr />

export default Contact