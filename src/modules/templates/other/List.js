import React from 'react';

const List = ({ results, search }) => {
  const handleLink = url => {
    let type = url.split('/');
    console.log(type);
    type = type[2];
    search(url, type);
  };
  return (
    <div>
      <h1>Results:</h1>
      {results.map((item, i) => (
        <button key={i} className='link' onClick={() => handleLink(item.url)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default List;
