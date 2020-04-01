import React from 'react';

const MagicSchools = ({ name, desc }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Description:</h2>
      <p>{desc}</p>
    </div>
  );
};

export default MagicSchools;
