import React from 'react';

const StartingEquipment = ({
  choice_1,
  choice_2,
  choice_3,
  choice_4,
  choice_5,
  baseClass,
  starting_equipment,
  search
}) => {
  const handleLink = (url, type) => {
    search(url, type);
  };
  return (
    <div>
      <h1>{baseClass.name} Starting Equipment</h1>
      <button
        className='link'
        onClick={() => handleLink(baseClass.url, 'classes')}
      >
        {baseClass.name} main page
      </button>
      <h2>Starting Equipment:</h2>
      {starting_equipment.map((item, i) => (
        <div key={i}>
          {item.quantity}x
          <button
            className='link inline'
            onClick={() => handleLink(item.item.url, 'equipment')}
          >
            {item.item.name}
          </button>
        </div>
      ))}

      {choice_1 && <h2>Choice 1:</h2>}
      {choice_1 &&
        choice_1.map((item, i) => (
          <div key={i}>
            <h4>
              option {i + 1}
              {item.choose !== item.from.length && ` (pick ${item.choose})`}:
            </h4>
            {item.from.map((item, i) => (
              <p key={i}>
                {item.quantity}x
                <button
                  className='link inline'
                  onClick={() => handleLink(item.item.url, 'equipment')}
                >
                  {item.item.name}
                </button>
              </p>
            ))}
          </div>
        ))}
      {choice_2 && <h2>Choice 2:</h2>}
      {choice_2 &&
        choice_2.map((item, i) => (
          <div key={i}>
            <h4>
              option {i + 1}
              {item.choose !== item.from.length && ` (pick ${item.choose})`}:
            </h4>
            {item.from.map((item, i) => (
              <p key={i}>
                {item.quantity}x
                <button
                  className='link inline'
                  onClick={() => handleLink(item.item.url, 'equipment')}
                >
                  {item.item.name}
                </button>
              </p>
            ))}
          </div>
        ))}
      {choice_3 && <h2>Choice 3:</h2>}
      {choice_3 &&
        choice_3.map((item, i) => (
          <div key={i}>
            <h4>
              option {i + 1}
              {item.choose !== item.from.length && ` (pick ${item.choose})`}:
            </h4>
            {item.from.map((item, i) => (
              <p key={i}>
                {item.quantity}x
                <button
                  className='link inline'
                  onClick={() => handleLink(item.item.url, 'equipment')}
                >
                  {item.item.name}
                </button>
              </p>
            ))}
          </div>
        ))}
      {choice_4 && <h2>Choice 4:</h2>}
      {choice_4 &&
        choice_4.map((item, i) => (
          <div key={i}>
            <h4>
              option {i + 1}
              {item.choose !== item.from.length && ` (pick ${item.choose})`}:
            </h4>
            {item.from.map((item, i) => (
              <p key={i}>
                {item.quantity}x
                <button
                  className='link inline'
                  onClick={() => handleLink(item.item.url, 'equipment')}
                >
                  {item.item.name}
                </button>
              </p>
            ))}
          </div>
        ))}
      {choice_5 && <h2>Choice 5:</h2>}
      {choice_5 &&
        choice_5.map((item, i) => (
          <div key={i}>
            <h4>
              option {i + 1}
              {item.choose !== item.from.length && ` (pick ${item.choose})`}:
            </h4>
            {item.from.map((item, i) => (
              <p key={i}>
                {item.quantity}x
                <button
                  className='link inline'
                  onClick={() => handleLink(item.item.url, 'equipment')}
                >
                  {item.item.name}
                </button>
              </p>
            ))}
          </div>
        ))}
    </div>
  );
};

export default StartingEquipment;
