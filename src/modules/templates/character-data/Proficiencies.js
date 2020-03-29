import React from 'react';

const Proficiencies = ({ name, type, classes, races, search }) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Type:</h2>
      <p>{type}</p>
      <h2>Classes who have Proficiency:</h2>
      {classes.map(item => (
        <button
          className='link'
          onClick={() => handleLink(item.url, 'Classes')}
        >
          {item.name}
        </button>
      ))}
      <h2>Races who have Proficiency:</h2>
      {races.map(item => (
        <button className='link' onClick={() => handleLink(item.url, 'Races')}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Proficiencies;
