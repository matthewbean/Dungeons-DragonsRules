import React from 'react';

const Equipment = ({
  name,
  equipment_category,
  weapon_category,
  armor_category,
  armor_class,
  str_minimum,
  stealth_disadvantage,
  weight,
  weapon_range,
  cost,
  damage,
  range,
  properties,
  desc,
  search
}) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{name}</h1>
      {desc && (
        <div>
          <h2>Description: </h2>
          {desc && desc.map(item => <p>{item}</p>)}
        </div>
      )}
      {equipment_category === 'Weapon' && (
        <div>
          <h2>Basic Information:</h2>
          <div>
            <span className='title'>Weapon Category:</span> {weapon_category}
          </div>
          <div>
            <span className='title'>Weapon Range:</span> {weapon_range}
          </div>
          <div>
            <span className='title'>Damge:</span> {damage.damage_dice}+
            {damage.damage_bonus}
          </div>
          <div>
            <span className='title'>Strength Requirement:</span>
            {str_minimum}
          </div>
          <div>
            <span className='title'>Stealth Disadvantage:</span>
            {stealth_disadvantage}
          </div>

          <h2>Properties:</h2>
          {properties.length !== 0 &&
            properties &&
            properties.map(item => (
              <button
                className='link'
                onClick={() => handleLink(item.url, 'races')}
              >
                {item.name}
              </button>
            ))}
        </div>
      )}
      {equipment_category === 'Armor' && (
        <div>
          <h2>Basic Information:</h2>
          <div>
            <span className='title'>Armor Category:</span> {armor_category}
          </div>
          <div>
            <span className='title'>Armor Class:</span> {armor_class.base} +
            {armor_class.dex_bonus ? ` ${armor_class.max_bonus} dex` : ' 0 dex'}
          </div>
        </div>
      )}
      {weight && <h2>Weight:</h2>}
      {cost && <div>{weight}lb</div>}
      {cost && <h2>Cost:</h2>}
      {cost && (
        <div>
          {cost.quantity}
          {cost.unit}
        </div>
      )}
    </div>
  );
};

export default Equipment;
