import React from 'react';

const Features = ({ name, baseClass, desc, level, search }) => {
  const handleLink = url => {
    search(url, 'classes');
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Description:</h2>
      {desc.map(item => (
        <p>{item}</p>
      ))}
      <h2>Learned By:</h2>
      <button className='link' onClick={() => handleLink(baseClass.url)}>
        {baseClass.name}
      </button>
      level {level}
    </div>
  );
};

export default Features;
