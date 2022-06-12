import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import './style.css'
import me from'../../assets/images/me.png';
import Button from '../UI/Button';
import Tile from '../UI/Tile';

const Education = () => {
  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <SmallHeading text="Qualification" />
      <MediumHeading text={'My Education'} />
      <div className="flex-row justify-content align-center">
        <div className="meLeftImgcontainer" style={{ marginTop: '-60px' }}>
          <img src={me} alt="" />
          <div
            style={{
              background: '#ffff',
              padding: '10px 10px ',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '20px',
              marginTop: '-4px',
              width: '300px',
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <Tile 
            title="BS Computer Science"
            mediumTitle="Punjab University College Of Information Technology, Lahore Punjab"
            desc="Passed the University exam with 3.15/4.00 CGPA.(2018-2022)"
          />
          <Tile
            title="F.Sc (Pre-Engineering)"
            mediumTitle="Govt. Islamia Degree College, Kasur Punjab"
            desc="Passed the intermediate exam with A+ grade.(2015-2018)"
          />
          <Tile
            title="Matriculation (Science Group)"
            mediumTitle="Govt. Model High School, Kasur Punjab"
            desc="Passed the matriculation exam with A+ grade.(2013-2015)"
          />
        </div>
      </div>
    </div>
  );
}

export default Education