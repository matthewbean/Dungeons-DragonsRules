import React from 'react';
import AbilityScores from './templates/character-data/AbilityScores';
import Skills from '../modules/templates/character-data/Skills';
import Proficiencies from '../modules/templates/character-data/Proficiencies';
import Languages from '../modules/templates/character-data/Languages';
import Classes from './templates/classes/Classes';

import List from '../modules/templates/other/List';

const Results = ({ result, type, search }) => {
  return (
    <div>
      {type === 'Ability-Scores' && (
        <AbilityScores
          desc={result.desc}
          full_name={result.full_name}
          skills={result.skills}
          search={search}
        />
      )}
      {type === 'Skills' && (
        <Skills
          desc={result.desc}
          name={result.name}
          ability_score={result.ability_score}
          search={search}
        />
      )}
      {type === 'Proficiencies' && (
        <Proficiencies
          type={result.type}
          name={result.name}
          classes={result.classes}
          races={result.races}
          search={search}
        />
      )}
      {type === 'Languages' && (
        <Languages
          name={result.name}
          script={result.script}
          typical_speakers={result.typical_speakers}
        />
      )}
      {type === 'Classes' && (
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

      {type === 'List' && <List results={result.results} />}
    </div>
  );
};

export default Results;
