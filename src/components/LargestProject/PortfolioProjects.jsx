import React from 'react';
import Card from '../UI/Card/Card';
import MediumHeading from '../UI/MediumHeading';
import SmallHeading from '../UI/SmallHeading';
import './style.css';
import project from '../../assets/projects/ImagePortfolio.png';
import Button from '../UI/Button';

const PortfolioProjects = () => {
  return (
    <div
      className="container"
      style={{ marginTop: '50px', marginBottom: '50px' }}
    >
      <Card className="flex-row align-center justify-content">
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <SmallHeading text="portfolios" />
          <MediumHeading style={{textTransform:'uppercase'}}  text="Latest Project" />
          <div className='mtb-10 flex-row' style={{justifyContent:'center'}}>
            <Button label="Portfolio" />
          </div>
        </div>
        <div className="projectImageContainer">
          <img src={project} alt="" />
        </div>
      </Card>
    </div>
  );
};

export default PortfolioProjects;
