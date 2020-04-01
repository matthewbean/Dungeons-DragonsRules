import React from 'react';
import AbilityScores from './templates/character-data/AbilityScores';
import Skills from '../modules/templates/character-data/Skills';
import Proficiencies from '../modules/templates/character-data/Proficiencies';
import Languages from '../modules/templates/character-data/Languages';
import Classes from './templates/classes/Classes';
import StartingEquipment from '../modules/templates/classes/StartingEquipment';
import SpellCasting from '../modules/templates/classes/SpellCasting';
import Traits from '../modules/templates/races/Traits';
import Equipment from '../modules/templates/equipment/Equipment';
import Spells from '../modules/templates/spells/Spells';
import MagicSchools from '../modules/templates/spells/MagicSchools';

import List from '../modules/templates/other/List';
import Subclasses from './templates/classes/Subclasses';
import Features from './templates/classes/Features';
import ClassLevels from './templates/classes/ClassLevels';
import Races from './templates/races/Races';
import Monsters from './templates/monsters/Monsters';

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
      {type === 'spellcasting' && (
        <SpellCasting
          className={result.class}
          spellcasting_ability={result.spellcasting_ability}
          info={result.info}
          search={search}
        />
      )}
      {type === 'races' && (
        <Races
          name={result.name}
          speed={result.speed}
          ability_bonuses={result.ability_bonuses}
          alignment={result.alignment}
          age={result.age}
          size={result.size}
          size_description={result.size_description}
          starting_proficiencies={result.starting_proficiencies}
          starting_proficiency_options={result.starting_proficiency_options}
          languages={result.languages}
          language_desc={result.language_desc}
          traits={result.traits}
          subraces={result.subraces}
          search={search}
        />
      )}
      {type === 'traits' && (
        <Traits
          name={result.name}
          races={result.races}
          desc={result.desc}
          search={search}
        />
      )}
      {type === 'equipment' && (
        <Equipment
          name={result.name}
          equipment_category={result.equipment_category}
          weapon_category={result.weapon_category}
          weapon_range={result.weapon_range}
          armor_category={result.armor_category}
          armor_class={result.armor_class}
          str_minimum={result.str_minimum}
          stealth_disadvantage={result.stealth_disadvantage}
          weight={result.weight}
          cost={result.cost}
          damage={result.damage}
          range={result.range}
          properties={result.properties}
          desc={result.desc}
          search={result.search}
        />
      )}
      {type === 'spells' && (
        <Spells
          name={result.name}
          desc={result.desc}
          higher_level={result.higher_level}
          range={result.range}
          components={result.components}
          material={result.material}
          ritual={result.ritual}
          duration={result.duration}
          concentration={result.concentration}
          casting_time={result.casting_time}
          level={result.level}
          school={result.school}
          classes={result.classes}
          search={search}
        />
      )}
      {type === 'magic-schools' && (
        <MagicSchools name={result.name} desc={result.desc} />
      )}
      {type === 'monsters' && (
        <Monsters
          name={result.name}
          size={result.size}
          type={result.type}
          alignment={result.alignment}
          armor_class={result.armor_class}
          hit_points={result.hit_points}
          hit_dice={result.hit_dice}
          speed={result.speed}
          strength={result.strength}
          dexterity={result.dexterity}
          constitution={result.constitution}
          intelligence={result.intelligence}
          wisdom={result.wisdom}
          charisma={result.charisma}
          proficiencies={result.proficiencies}
          damage_vulnerabilities={result.damage_vulnerabilities}
          damage_resistances={result.damage_resistances}
          damage_immunities={result.damage_immunities}
          condition_immunities={result.condition_immunities}
          languages={result.languages}
          challenge_rating={result.challenge_rating}
          special_abilities={result.special_abilities}
          actions={result.actions}
          legendary_actions={result.legendary_actions}
          seach={search}
        />
      )}

      {type === 'list' && <List results={result.results} search={search} />}
    </div>
  );
};

export default Results;
