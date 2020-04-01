import React from 'react';

const Proficiencies = ({ name, races, desc, search }) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Description:</h2>
      <p>{desc}</p>
      <h2>Races who have Trait:</h2>
      {races &&
        races.length !== 0 &&
        races.map(item => (
          <button
            className='link'
            onClick={() => handleLink(item.url, 'races')}
          >
            {item.name}
          </button>
        ))}
    </div>
  );
};

export default Proficiencies;
