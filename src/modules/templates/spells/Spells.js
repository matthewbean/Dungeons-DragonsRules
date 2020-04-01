import React from 'react';

const Spells = ({
  name,
  desc,
  higher_level,
  range,
  components,
  material,
  ritual,
  duration,
  concentration,
  casting_time,
  level,
  school,
  classes,
  search
}) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>Description:</h2>
      <div className='map'>
        {desc.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      {higher_level && (
        <div className='map'>
          {higher_level.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
      <div className='single'>
        <span className='title'>Range:</span> {range}
      </div>
      <h2>Requirements & Details:</h2>
      <div className='map'>
        <span className='title'>components:</span>
        {components.map((item, i) => (
          <div className='inline'>
            {item}
            {i !== components.length - 1 && ', '}
          </div>
        ))}
      </div>
      {material && (
        <div className='single'>
          <span className='title'>Material:</span> {material}
        </div>
      )}
      <div className='single'>
        <span className='title'>Duration:</span> {duration}
      </div>
      <div className='single'>
        <span className='title'>Ritual:</span> {ritual ? ' yes' : ' no'}
      </div>
      <div className='single'>
        <span className='title'>concentration:</span>
        {concentration ? ' yes' : ' no'}
      </div>
      <div className='single'>
        <span className='title'>Casting Time:</span> {casting_time}
      </div>
      <div className='single'>
        <span className='title'>Level:</span> {level}
      </div>
      <div className='single'>
        <span className='title'>School:</span>
        <button
          className='link inline'
          onClick={() => handleLink(school.url, 'magic-schools')}
        >
          {school.name}
        </button>
      </div>
      <h2>Classes:</h2>
      {classes.map(item => (
        <button className='link' onClick={() => handleLink(item.url, 'races')}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Spells;
