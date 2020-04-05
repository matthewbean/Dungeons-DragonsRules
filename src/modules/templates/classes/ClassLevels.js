import React from 'react';

const ClassLevels = ({ result, search }) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  console.log(result);
  result = result.filter(item => !item.subclass);
  console.log(result);
  let classSpecifics = [];
  for (let i = 0; i <= 19; i++) {
    let newLevel = [];
    for (const prop in result[i].class_specific) {
      let level = {
        key: prop.split('_').join(' '),
        value: result[i].class_specific[prop]
      };
      if (typeof level.value === 'object') {
        let sublevel = [];
        for (const prop in level.value) {
          sublevel.push({
            key: prop.split('_').join(' '),
            value: level.value[prop]
          });
        }
        level.value = sublevel;
      }
      newLevel.push(level);
    }
    classSpecifics.push(newLevel);
  }

  console.log(classSpecifics);
  return (
    <div>
      <h1>{result[0].class.name}</h1>

      {result.map((item, i) => (
        <div key={i} className='section'>
          <h2>Level {item.level}</h2>
          <h4>Proficiency Bonus: {item.prof_bonus}</h4>
          <h4>Ability Score Bonuses: {item.ability_score_bonuses}</h4>
          {item.features !== [] && <h4>Features Learned:</h4>}
          {item.features &&
            item.features.map((item, i) => (
              <div key={i}>
                <button
                  className='link'
                  onClick={() => handleLink(item.url, 'features')}
                >
                  {item.name}
                </button>
              </div>
            ))}
          {item.spellcasting && (
            <div>
              <h4>Spell Casting:</h4>
              {item.spellcasting.cantrips_known && (
                <div>Cantrips: {item.spellcasting.cantrips_known}</div>
              )}
              {item.spellcasting.spells_known && (
                <div>Spells Known: {item.spellcasting.spells_known}</div>
              )}
              <h5>Spell Slots:</h5>
              {item.spellcasting.spell_slots_level_1 !== 0 &&
                item.spellcasting.spell_slots_level_1 && (
                  <div>Level 1: {item.spellcasting.spell_slots_level_1}</div>
                )}
              {item.spellcasting.spell_slots_level_2 !== 0 &&
                item.spellcasting.spell_slots_level_2 && (
                  <div>Level 2: {item.spellcasting.spell_slots_level_2}</div>
                )}
              {item.spellcasting.spell_slots_level_3 !== 0 &&
                item.spellcasting.spell_slots_level_3 && (
                  <div>Level 3: {item.spellcasting.spell_slots_level_3}</div>
                )}
              {item.spellcasting.spell_slots_level_4 !== 0 &&
                item.spellcasting.spell_slots_level_4 && (
                  <div>Level 4: {item.spellcasting.spell_slots_level_4}</div>
                )}
              {item.spellcasting.spell_slots_level_5 !== 0 &&
                item.spellcasting.spell_slots_level_5 && (
                  <div>Level 5: {item.spellcasting.spell_slots_level_5}</div>
                )}
              {item.spellcasting.spell_slots_level_6 !== 0 &&
                item.spellcasting.spell_slots_level_6 && (
                  <div>Level 6: {item.spellcasting.spell_slots_level_6}</div>
                )}
              {item.spellcasting.spell_slots_level_7 !== 0 &&
                item.spellcasting.spell_slots_level_7 && (
                  <div>Level 7: {item.spellcasting.spell_slots_level_7}</div>
                )}
              {item.spellcasting.spell_slots_level_8 !== 0 &&
                item.spellcasting.spell_slots_level_8 && (
                  <div>Level 8: {item.spellcasting.spell_slots_level_8}</div>
                )}
              {item.spellcasting.spell_slots_level_9 !== 0 &&
                item.spellcasting.spell_slots_level_9 && (
                  <div>Level 9: {item.spellcasting.spell_slots_level_9}</div>
                )}
            </div>
          )}
          <h4>Class Specifics:</h4>
          {result[0].class.name === 'Sorcerer' ? (
            <div>
              <div>Sorcery Points: {item.class_specific.sorcery_points}</div>
              <div>Metamagic Known: {item.class_specific.metamagic_known}</div>
              <div>Created Spell Slots:</div>
              {item.class_specific.creating_spell_slots.map((item, i) => (
                <div key={i}>
                  <div>Spell Slot Level: {item.spell_slot_level}</div>
                  <div>Sorcery Point Cost: {item.sorcery_point_cost}</div>
                </div>
              ))}
            </div>
          ) : (
            classSpecifics[i].map((item, i) =>
              typeof item.value !== 'object' ? (
                <div key={i}>
                  {item.key}: {item.value.toString()}
                </div>
              ) : (
                <div key={i}>
                  {item.key}:{item.value[0].value}d{item.value[1].value}
                </div>
              )
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ClassLevels;
