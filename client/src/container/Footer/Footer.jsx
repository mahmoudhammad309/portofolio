import React, { useState } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdOutgoingMail } from 'react-icons/md';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log('clicked');
    // Send message to sanity
    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

    // Send the email using the SendGrid API
    emailjs
      .send(
        'service_738o9ln',
        'template_ko0mk7e',
        formData,
        'qUAgNGmGoERSV_9r4'
      )
      .then(
        (result) => {
          console.log('aaaaaaaaaaaaaaaaa');
          console.log(result.text);
        },
        (error) => {
          console.log('rrrrrrrrrrrrrrr');

          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:mahmoudhammad3009@gmail.com' className='p-text'>
            mahmoudhammad3009@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <RiWhatsappFill className='whatsapp__icon' />
          <a
            href='https://api.whatsapp.com/send?phone=972597694093'
            className='p-text'
          >
            +972597694093
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='username'
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
