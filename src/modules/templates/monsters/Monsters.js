import React from 'react';

const Monsters = ({
  name,
  size,
  type,
  alignment,
  armor_class,
  hit_points,
  hit_dice,
  speed,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  proficiencies,
  damage_vulnerabilities,
  damage_resistances,
  damage_immunities,
  condition_immunities,
  languages,
  challenge_rating,
  special_abilities,
  actions,
  legendary_actions,
  search
}) => {
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
    <div className='main'>
      <h1>{name}</h1>
      <div className='section'>
        <h2>General Information:</h2>
        <div className='single'>
          <span className='title'>Challenge Rating:</span> {challenge_rating}
        </div>
        <div className='single'>
          <span className='title'>Size:</span> {size}
        </div>
        <div className='single'>
          <span className='title'>Type:</span> {type}
        </div>
        <div className='single'>
          <span className='title'>Alignment:</span> {alignment}
        </div>
        <div className='single'>
          <span className='title'>Armor Class:</span> {armor_class}
        </div>
        <div className='single'>
          <span className='title'>Hit Points:</span> {hit_points}
        </div>
        <div className='single'>
          <span className='title'>Hit Dice:</span> {hit_dice}
        </div>
        <div className='single'>
          <span className='title'>languages:</span>{' '}
          {languages === '' ? 'none' : languages}
        </div>
      </div>
      <div className='section'>
        <h2>Movement:</h2>
        {speed.walk && (
          <div className='single'>
            <span className='title'>Walking:</span> {speed.walk}
          </div>
        )}
        {speed.fly && (
          <div className='single'>
            <span className='title'>Flying:</span> {speed.fly}
          </div>
        )}
        {speed.climb && (
          <div className='single'>
            <span className='title'>Climbing:</span> {speed.climb}
          </div>
        )}
        {speed.swim && (
          <div className='single'>
            <span className='title'>Swimming:</span> {speed.swim}
          </div>
        )}
      </div>
      <div className='section'>
        <h2>Ability Points:</h2>
        <div className='single'>
          <span className='title'>Strength:</span> {strength}
        </div>
        <div className='single'>
          <span className='title'>Dexterity:</span> {dexterity}
        </div>
        <div className='single'>
          <span className='title'>Constitution:</span> {constitution}
        </div>
        <div className='single'>
          <span className='title'>Intelligence:</span> {intelligence}
        </div>
        <div className='single'>
          <span className='title'>Wisdom:</span> {wisdom}
        </div>
        <div className='single'>
          <span className='title'>Charisma:</span> {charisma}
        </div>
      </div>
      <div className='section'>
        <h2>Proficiencies</h2>
        <div className='map'>
          {proficiencies.map((item, i) => (
            <button
              className='link'
              key={i}
              onClick={() =>
                handleCheckLink(item.name, item.url, 'proficiencies')
              }
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className='section'>
        <h2>Damage:</h2>
        <div className='map'>
          <span className='title'>Damage Vulnerabilities:</span>
          {damage_vulnerabilities.length === 0 && (
            <div className='inline'> none</div>
          )}
          {damage_vulnerabilities.map((item, i) => (
            <div className='inline'>
              {item}
              {i !== damage_vulnerabilities.length - 1 && ', '}
            </div>
          ))}
        </div>
        <div className='map'>
          <span className='title'>Damage Resistances:</span>
          {damage_resistances.length === 0 && (
            <div className='inline'> none</div>
          )}
          {damage_resistances.map((item, i) => (
            <div className='inline' key={i}>
              {item}
              {i !== damage_resistances.length - 1 && ', '}
            </div>
          ))}
        </div>
        <div className='map'>
          <span className='title'>Damage Immunities:</span>
          {damage_immunities.length === 0 && (
            <div className='inline'> none</div>
          )}
          {damage_immunities.map((item, i) => (
            <div className='inline' key={i}>
              {item}
              {i !== damage_immunities.length - 1 && ', '}
            </div>
          ))}
        </div>
        <div className='map'>
          <span className='title'>Condition Immunities:</span>
          {condition_immunities.length === 0 && (
            <div className='inline'> none</div>
          )}
          {condition_immunities.map((item, i) => (
            <div className='inline' key={i}>
              {item.name}
              {i !== condition_immunities.length - 1 && ', '}
            </div>
          ))}
        </div>
      </div>

      <div className='section'>
        <h2>Abilities:</h2>
        <div className='map'>
          <h3>Actions:</h3>
          {actions.map((item, i) => (
            <div key={i}>
              <span className='title'>{item.name}: </span>
              {item.desc}
            </div>
          ))}
        </div>
        {legendary_actions && (
          <div className='map'>
            <h3>Legendary Actions:</h3>
            {legendary_actions.map((item, i) => (
              <div key={i}>
                <span className='title'>{item.name}: </span>
                {item.desc}
              </div>
            ))}
          </div>
        )}
        {special_abilities && (
          <div className='map'>
            <h3>Special Abilities:</h3>
            {special_abilities.map((item, i) => (
              <div key={i}>
                <span className='title'>{item.name}: </span>
                {item.desc}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Monsters;
