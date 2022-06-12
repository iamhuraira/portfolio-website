import React from 'react';
import './style.css';
import me from '../../assets/images/me.png';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <div className="container" style={{ marginTop: '70px' }}>
      <div className="flex-row justify-content align-center">
        <div>
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor"> Hello,</span> I'm Anjum Hussain
          </p>
          <h1 className="textColor ls-1 mtb-10">Wordpress Developer </h1>
          <p className="font-12 grey mtb-10">
            Complete Website Build with Elementor Pro.
          </p>
          <div className="flex-row " style={{margin:'30px 0'}}>
            <div>
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10 ">
              <Button label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div className="meRightimgcontainer">
          <img src={me} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
