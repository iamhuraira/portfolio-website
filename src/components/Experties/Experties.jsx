import React from 'react';
import Card from '../UI/Card/Card';
import MediumHeading from '../UI/MediumHeading';
import SmallHeading from '../UI/SmallHeading';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { colors } from '../../style';
import me from '../../assets/images/3-removebg.png'
import './style.css'
import SocialConnects from '../UI/SocialConnect/SocialConnects';

const Experties = () => {
  const percentage = 80;
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="meLeftimgcontainer" style={{ marginTop: '-60px' }}>
        <img src={me} alt="" />
      </div>
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <Card style={{ padding: '30px', width: '320px', margin: '100px 350px' }}>
        <div className="flex-row align-center ">
          <div style={{ width: '80px', height: '80px' }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.primaryColor,
                pathColor: '#21759b',
              })}
            />
          </div>
          <h2 className=" textColor mlr-10 align-center text-center ">
            Development
          </h2>
        </div>
        <p className="grey mtb-10 font-14">
          JavaScript is the one of the greatest Programing language.
        </p>
      </Card>
      <SocialConnects />
    </div>
  );
};

export default Experties;
