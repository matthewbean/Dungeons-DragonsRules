import React from 'react';

const Subclasses = ({
  name,
  baseclass,
  desc,
  features,
  spells,
  subclass_flavor,
  search
}) => {
  const handleLink = (url, type) => {
    search(url, type);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>Base Class</h2>
      <button
        className='link'
        onClick={() => handleLink(baseclass.url, 'classes')}
      >
        {baseclass.name}
      </button>
      <h2>{subclass_flavor}:</h2>
      {desc.map((item, i) => (
        <p>{item}</p>
      ))}
      <h2>Features:</h2>
      {features.map(item => (
        <div>
          <p>{item}</p>
        </div>
      ))}
      {spells && <h2>Spells:</h2>}
      {spells &&
        spells.map((item, i) => (
          <div>
            <button
              onClick={() => handleLink(item.spell.url, 'spells')}
              className='link'
              key={i}
            >
              {item.spell.name}
            </button>
            <div>prerquisites:</div>
            {item.prerequisites.map((item, i) =>
              item.type === 'level' ? (
                <div key={i}>
                  {item.url.split('/')[3]} {item.url.split('/')[4]}{' '}
                  {item.url.split('/')[5]}
                </div>
              ) : (
                <button
                  key={i}
                  className='link'
                  onCLick={() => handleLink(item.url, 'spells')}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        ))}
    </div>
  );
};

export default Subclasses;
