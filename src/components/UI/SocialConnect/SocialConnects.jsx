import React from 'react'

import socialIcons from '../../../assets/social-icons';
import facebook from '../../../assets/social-icons/facebook.png'
import instagram from '../../../assets/social-icons/instagram.png';
import linkedin from '../../../assets/social-icons/linkedin.png';
import youtube from '../../../assets/social-icons/youtube.png';
import './style.css';

const SocialConnects = (props) => {
  return (
    <div className="socialConnect">
      <span className='textColor font-12'>Follow me on: </span>
      <a className="socialLinks" href="#">
        <img src={facebook} alt="" />
      </a>
      <a className="socialLinks" href="#">
        <img src={instagram} alt="" />
      </a>
      <a className="socialLinks" href="#">
        <img src={linkedin} alt="" />
      </a>
      <a className="socialLinks" href="#">
        <img src={youtube} alt="" />
      </a>
    </div>
  );
}

export default SocialConnects