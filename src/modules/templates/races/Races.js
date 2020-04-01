import React from 'react';

const Races = ({
  name,
  speed,
  ability_bonuses,
  alignment,
  age,
  size,
  starting_proficiencies,
  starting_proficiency_options,
  languages,
  language_desc,
  traits,
  search
}) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Basic Information:</h2>
      <div>
        <span className='title'>Size:</span> {size}
      </div>
      <div>
        <span className='title'>Age:</span> {age}
      </div>
      <div>
        <span className='title'>Speed:</span>
        {speed}
      </div>
      <div>
        <span className='title'>Alignment:</span> {alignment}
      </div>
      <div>
        <span className='title'>Languages:</span>
        {languages.map((item, i) => (
          <div key={i}>
            <button
              className='link inline'
              onClick={() => handleLink(item.url, 'languages')}
            >
              {item.name}
            </button>
          </div>
        ))}
        <p>{language_desc}</p>
      </div>
      <h2>Bonuses:</h2>
      <div>
        <span className='title'>Ability Score Bonus:</span>
        {ability_bonuses.map((item, i) => (
          <div key={i}>
            <button
              className='link inline'
              onClick={() => handleLink(item.url, 'ability-scores')}
            >
              {item.name}
            </button>
            : {item.bonus}
          </div>
        ))}
      </div>
      {starting_proficiencies && starting_proficiencies.length !== 0 && (
        <div>
          <span className='title'>Starting Proficiencies:</span>
          {starting_proficiencies.map((item, i) => (
            <div key={i}>
              <button
                className='link inline'
                onClick={() => handleLink(item.url, 'proficiencies')}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      )}
      {starting_proficiency_options &&
        starting_proficiency_options.length !== 0 && (
          <div>
            <span className='title'>
              Choose {starting_proficiency_options.choose}:
            </span>
            {starting_proficiency_options.from.map((item, i) => (
              <div key={i}>
                <button
                  className='link inline'
                  onClick={() => handleLink(item.url, 'proficiencies')}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        )}
      {traits && traits.length !== 0 && (
        <div>
          <span className='title'>Traits:</span>
          {traits.map((item, i) => (
            <div key={i}>
              <button
                className='link inline'
                onClick={() => handleLink(item.url, 'traits')}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Races;
