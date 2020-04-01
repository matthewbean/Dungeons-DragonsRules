import React from 'react';

const Features = ({ className, spellcasting_ability, info, search }) => {
  const handleLink = url => {
    search(url, 'classes');
  };
  return (
    <div>
      <h1>{className.name} Spellcasting</h1>
      <h2>Modified By:</h2>
      <button
        className='link'
        onClick={() => handleLink(spellcasting_ability.url, 'ability-score')}
      >
        {spellcasting_ability.name}
      </button>
      <h2>Description:</h2>
      {info.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
