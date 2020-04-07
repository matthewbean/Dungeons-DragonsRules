import React from 'react';

const Skills = ({ desc, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className='section'>
        <h2>Description:</h2>
        {desc.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
