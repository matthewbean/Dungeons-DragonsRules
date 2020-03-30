import React from 'react';
import AbilityScores from './templates/character-data/AbilityScores';
import Skills from '../modules/templates/character-data/Skills';
import Proficiencies from '../modules/templates/character-data/Proficiencies';
import Languages from '../modules/templates/character-data/Languages';
import Classes from './templates/classes/Classes';
import StartingEquipment from '../modules/templates/classes/StartingEquipment';

import List from '../modules/templates/other/List';
import Subclasses from './templates/classes/Subclasses';
import Features from './templates/classes/Features';
import ClassLevels from './templates/classes/ClassLevels';

const Results = ({ result, type, search }) => {
  return (
    <div>
      {type === 'ability-scores' && (
        <AbilityScores
          desc={result.desc}
          full_name={result.full_name}
          skills={result.skills}
          search={search}
        />
      )}
      {type === 'skills' && (
        <Skills
          desc={result.desc}
          name={result.name}
          ability_score={result.ability_score}
          search={search}
        />
      )}
      {type === 'proficiencies' && (
        <Proficiencies
          type={result.type}
          name={result.name}
          classes={result.classes}
          races={result.races}
          search={search}
        />
      )}
      {type === 'languages' && (
        <Languages
          name={result.name}
          script={result.script}
          typical_speakers={result.typical_speakers}
        />
      )}
      {type === 'classes' && (
        <Classes
          name={result.name}
          hit_die={result.hit_die}
          proficiencies={result.proficiencies}
          proficiency_choices={result.proficiency_choices}
          saving_throws={result.saving_throws}
          starting_equipment={result.starting_equipment}
          class_levels={result.class_levels}
          subclasses={result.subclasses}
          spellcasting={result.spellcasting}
          search={search}
        />
      )}
      {type === 'subclasses' && (
        <Subclasses
          name={result.name}
          baseclass={result.class}
          desc={result.desc}
          features={result.features}
          spells={result.spells}
          subclass_flavor={result.subclass_flavor}
          search={search}
        />
      )}

      {type === 'features' && (
        <Features
          name={result.name}
          baseClass={result.class}
          desc={result.desc}
          level={result.level}
          search={search}
        />
      )}
      {type === 'starting-equipment' && (
        <StartingEquipment
          choice_1={result.choice_1}
          choice_2={result.choice_2}
          choice_3={result.choice_3}
          choice_4={result.choice_4}
          choice_5={result.choice_5}
          baseClass={result.class}
          starting_equipment={result.starting_equipment}
          search={search}
        />
      )}
      {type === 'class-levels' && (
        <ClassLevels result={result} search={search} />
      )}

      {type === 'list' && <List results={result.results} search={search} />}
    </div>
  );
};

export default Results;
