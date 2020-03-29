import React, { useState } from 'react';

const Search = ({ search, setType }) => {
  const [state, setState] = useState({
    search: '',
    category: 'Character-Data',
    subcategory1: 'Ability-Scores',
    subcategory2: 'Classes',
    subcategory3: 'Races',
    subcategory4: 'Equipment',
    subcategory7: 'Conditions'
  });

  const handleChange = e =>
    setState({ ...state, [e.target.id]: e.target.value });

  const submit = () => {
    //set subcategory for search
    let sub;
    let type;

    switch (state.category) {
      case 'Character-Data':
        sub = state.subcategory1;
        break;
      case 'Classes':
        sub = state.subcategory2;
        break;
      case 'Races':
        sub = state.subcategory3;
        break;
      case 'Equipment':
        sub = state.subcategory4;
        break;
      case 'Game-Mechanics':
        sub = state.subcategory7;
        break;
      default:
        sub = state.category;
    }
    if (state.search === '') {
      type = 'List';
    } else {
      type = sub;
    }
    let fixedSearch = state.search;
    fixedSearch = fixedSearch.split(' ');
    fixedSearch = fixedSearch.join('-');
    fixedSearch = `/api/${sub}/${fixedSearch}`;

    search(fixedSearch, type);
  };
  return (
    <div>
      <input
        id='search'
        type='text'
        value={state.search}
        onChange={handleChange}
      ></input>
      <select id='category' onChange={handleChange} value={state.category}>
        <option value='Character-Data'>Character Data</option>
        <option value='Classes'>Classes</option>
        <option value='Races'>Races</option>
        <option value='Equipment'>Equipment</option>
        <option value='Spells'>Spells</option>
        <option value='Monsters'>Monsters</option>
        <option value='Game-Mechanics'>Game Mechanics</option>
      </select>
      {state.category === 'Character-Data' && (
        <select
          id='subcategory1'
          onChange={handleChange}
          value={state.subcategory1}
        >
          <option value='Ability-Scores'>Ability Scores</option>
          <option value='Skills'>Skills</option>
          <option value='Proficiencies'>Proficiencies</option>
          <option value='Languages'>Languages</option>
        </select>
      )}
      {state.category === 'Classes' && (
        <select
          id='subcategory2'
          onChange={handleChange}
          value={state.subcategory2}
        >
          <option value='Classes'>Classes</option>
          <option value='Subclasses'>Subclasses</option>
          <option value='Features'>Features</option>
        </select>
      )}
      {state.category === 'Races' && (
        <select
          id='subcategory3'
          onChange={handleChange}
          value={state.subcategory3}
        >
          <option value='Races'>Races</option>
          <option value='Subraces'>Subraces</option>
          <option value='Traits'>Traits</option>
        </select>
      )}
      {state.category === 'Equipment' && (
        <select
          id='subcategory4'
          onChange={handleChange}
          value={state.subcategory4}
        >
          <option value='Equipment-Categories'>Equipment Categories</option>
          <option value='Weapons'>Weapons</option>
          <option value='Armor'>Armor</option>
          <option value='Adventuring-Gear'>Adventuring Gear</option>
          <option value='Weapon-Properties'>Weapon Properties</option>
        </select>
      )}
      {state.category === 'Game-Mechanics' && (
        <select
          id='subcategory7'
          onChange={handleChange}
          value={state.subcategory7}
        >
          <option value='Conditions'>Conditions</option>
          <option value='Damage-Types'>Damage Types</option>
          <option value='Magic-Schools'>Magic Schools</option>
        </select>
      )}

      <input type='submit' onClick={submit} value='Search'></input>
    </div>
  );
};

export default Search;
