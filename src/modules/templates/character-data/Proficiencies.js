import React from 'react';

const Proficiencies = ({ name, type, classes, races, search }) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{name}</h1>
      <div className='section'>
        <h2>Type:</h2>
        <p>{type}</p>
      </div>
      <div className='section'>
        <h2>Classes who have Proficiency:</h2>
        {classes.map(item => (
          <button
            className='link'
            onClick={() => handleLink(item.url, 'classes')}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className='section'>
        <h2>Races who have Proficiency:</h2>
        {races.map(item => (
          <button
            className='link'
            onClick={() => handleLink(item.url, 'races')}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Proficiencies;
