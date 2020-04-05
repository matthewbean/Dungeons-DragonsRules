import React from 'react';

const Features = ({ name, baseClass, desc, level, search }) => {
  const handleLink = url => {
    search(url, 'classes');
  };
  return (
    <div>
      <h1>{name}</h1>
      <div className='section'>
        <h2>Description:</h2>
        {desc.map(item => (
          <p>{item}</p>
        ))}
      </div>
      <div className='section'>
        <h2>Learned By:</h2>
        <button className='link' onClick={() => handleLink(baseClass.url)}>
          {baseClass.name}
        </button>
        level {level}
      </div>
    </div>
  );
};

export default Features;
