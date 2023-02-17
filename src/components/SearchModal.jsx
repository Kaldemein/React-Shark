import React from 'react';
import Card from './Card/index';
function SearchModal({ openSearch, items, setOpenSearch }) {
  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={openSearch ? { display: 'block' } : { display: 'none' }} className="search-modal">
      <div className="search-modal__container">
        <input
          onChange={(e) => onInputChange(e)}
          value={inputValue}
          placeholder="Search something..."
          type="text"
        />
        <button onClick={() => setOpenSearch(!openSearch)}>x</button>
      </div>
      <div className="search-modal__items">
        {items
          .filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
          .map((item) => (inputValue.length > 0 ? <Card {...item} /> : null))}
      </div>
    </div>
  );
}

export default SearchModal;
