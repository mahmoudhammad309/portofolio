import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://twitter.com/mahmoud01_9'
        target='_blank'
        rel='noreferrer'
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href='https://www.facebook.com/mahmoud.hammad.773/'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href='https://www.instagram.com/mahmoudh._.h/'
        target='_blank'
        rel='noreferrer'
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a
        href='https://www.linkedin.com/in/mahmoud-hammad-99a4401b1/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
