import React from 'react';

const Languages = ({ script, typical_speakers, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className='section'>
        <h2>Witten:</h2>
        <p>{script}</p>
      </div>
      <div className='section'>
        <h2>typical speakers:</h2>
        {typical_speakers.map((item, i) => (
          <div key={i} className='list'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
