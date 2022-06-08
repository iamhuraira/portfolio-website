import React from 'react'
import Card from '../UI/Card/Card';
import MediumHeading from '../UI/MediumHeading';
import SmallHeading from '../UI/SmallHeading';
import Skill from '../UI/Skills/Skill'
import {colors} from '../../style'


const Specializing = (props) => {
  const skills = [
    {
      skillName: 'C++',
      desc: 'Hands on experience in C++',
      value: 85,
      textColor: colors.primaryColor,
      pathColor: ' blue',
    },
    {
      skillName: 'Java',
      desc: `Hands on experience in Java`,
      value: 80,
      textColor: colors.primaryColor,
      pathColor: 'red',
    },
    {
      skillName: 'HTML/CSS',
      desc: 'Hands on experience in html/css',
      value: 80,
      textColor: colors.primaryColor,
      pathColor: '#f2a154',
    },
    {
      skillName: 'JavaScript',
      desc: 'Hands on experience in JavaScript',
      value: 65,
      textColor: colors.primaryColor,
      pathColor: '#f9f871',
    },
    {
      skillName: '.Net',
      desc: 'Hands on experience in .Net',
      value: 70,
      textColor: colors.primaryColor,
      pathColor: '#682876',
    },

    {
      skillName: 'Wordpress',
      desc: 'Hands on experience in Wordpress',
      value: 85,
      textColor: colors.primaryColor,
      pathColor: '#21759b',
    },

    {
      skillName: 'Git',
      desc: 'Hands on experience in git',
      value: 75,
      textColor: colors.primaryColor,
      pathColor: '#F1502F',
    },
    {
      skillName: 'GitHub',
      desc: 'Hands on experience in GitHub',
      value: 80,
      textColor: colors.primaryColor,
      pathColor: '#171515',
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: '50px 50px 10px 50px' }}>
        <SmallHeading text="What i do" />
        <MediumHeading text="Specializing in" />
        <div
          style={{
            padding: '50px',
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            columnGap: '30px',
          }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Specializing;