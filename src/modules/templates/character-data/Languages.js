import React from 'react';

const Languages = ({ script, typical_speakers, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Witten:</h2>
      <p>{script}</p>
      <h2>typical speakers:</h2>
      {typical_speakers.map(item => (
        <div className='list'>{item}</div>
      ))}
    </div>
  );
};

export default Languages;
