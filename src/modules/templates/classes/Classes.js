import React from 'react';

const Classes = ({
  name,
  hit_die,
  proficiencies,
  proficiency_choices,
  saving_throws,
  starting_equipment,
  class_levels,
  subclasses,
  spellcasting,
  search
}) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  const handleCheckLink = (name, url, type) => {
    const skill = /Skill:/;
    let newUrl = name;
    if (skill.test(name)) {
      newUrl = newUrl.split(': ');
      newUrl = newUrl[1].split(' ');
      newUrl = newUrl.join('-');
      newUrl = `/api/skills/${newUrl}`;
      search(newUrl, 'skills');
    } else {
      search(url, type);
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Hit Die: {hit_die}</h2>
      <h2>Proficiencies:</h2>
      {proficiencies.map((item, i) => (
        <button
          className='link'
          onClick={() => handleLink(item.url, 'proficiencies')}
          key={i}
        >
          {item.name}
        </button>
      ))}
      {proficiency_choices.map((item, i) => (
        <div key={i}>
          <h2>Select {item.choose}</h2>
          {item.from.map(item => (
            <button
              className='link'
              onClick={() =>
                handleCheckLink(item.name, item.url, 'proficiencies')
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      ))}
      <h2>Saving Throws:</h2>
      {saving_throws.map((item, i) => (
        <button
          onClick={() => handleLink(item.url, 'ability-scores')}
          className='link'
          key={i}
        >
          {item.name}
        </button>
      ))}
      {subclasses && <h2>subclasses</h2>}
      {subclasses &&
        subclasses.map((item, i) => (
          <button
            onClick={() => handleLink(item.url, 'subclasses')}
            className='link'
            key={i}
          >
            {item.name}
          </button>
        ))}
      <h2>More information:</h2>
      <button
        onClick={() => handleLink(starting_equipment.url, 'starting-equipment')}
        className='link'
      >
        Starting equipment
      </button>

      <button
        onClick={() => handleLink(class_levels.url, 'class-levels')}
        className='link'
      >
        Class Levels
      </button>

      {spellcasting && (
        <button
          onClick={() => handleLink(spellcasting.url, 'spellcasting')}
          className='link'
        >
          Spellcasting
        </button>
      )}
    </div>
  );
};

export default Classes;
