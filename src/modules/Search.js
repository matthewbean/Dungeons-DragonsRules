import React, { useState } from 'react';

const Search = ({ search }) => {
  const [state, setState] = useState({
    search: '',
    category: 'character-data',
    subcategory1: 'ability-scores',
    subcategory2: 'classes',
    subcategory3: 'races',
    subcategory4: 'equipment',
  });

  const handleChange = (e) =>
    setState({ ...state, [e.target.id]: e.target.value });

  const submit = () => {
    //set subcategory for search
    let sub;
    let type;

    switch (state.category) {
      case 'character-data':
        sub = state.subcategory1;
        break;
      case 'classes':
        sub = state.subcategory2;
        break;
      case 'races':
        sub = state.subcategory3;
        break;
      case 'equipment':
        sub = state.subcategory4;
        break;
      default:
        sub = state.category;
    }
    if (state.search === '') {
      type = 'list';
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
    <div className='nav'>
      <input
        id='search'
        type='text'
        value={state.search}
        onChange={handleChange}
        className='search'
      ></input>
      <select
        id='category'
        onChange={handleChange}
        value={state.category}
        className='select'
      >
        <option value='character-data'>Character Data</option>
        <option value='classes'>Classes</option>
        <option value='races'>Races</option>
        <option value='equipment'>Equipment</option>
        <option value='spells'>Spells</option>
        <option value='monsters'>Monsters</option>
      </select>
      {state.category === 'character-data' && (
        <select
          id='subcategory1'
          onChange={handleChange}
          value={state.subcategory1}
          className='select'
        >
          <option value='ability-scores'>Ability Scores</option>
          <option value='skills'>Skills</option>
          <option value='proficiencies'>Proficiencies</option>
          <option value='languages'>Languages</option>
        </select>
      )}
      {state.category === 'classes' && (
        <select
          id='subcategory2'
          onChange={handleChange}
          value={state.subcategory2}
          className='select'
        >
          <option value='classes'>Classes</option>
          <option value='subclasses'>Subclasses</option>
          <option value='features'>Features</option>
        </select>
      )}
      {state.category === 'races' && (
        <select
          id='subcategory3'
          onChange={handleChange}
          value={state.subcategory3}
          className='select'
        >
          <option value='races'>Races</option>
          <option value='traits'>Traits</option>
        </select>
      )}
      {state.category === 'equipment' && (
        <select
          id='subcategory4'
          onChange={handleChange}
          value={state.subcategory4}
          className='select'
        >
          <option value='equipment'>Equipment</option>
          <option value='weapon-Properties'>Weapon Properties</option>
        </select>
      )}

      <input
        className='submit'
        type='submit'
        onClick={submit}
        value='search'
      ></input>
    </div>
  );
};

export default Search;
