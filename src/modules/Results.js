import React from 'react';
import AbilityScores from './templates/AbilityScores';
import Skills from '../modules/templates/Skills';

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
    </div>
  );
};

export default Results;
