import React from 'react';
import Card from './Card/index';
function SearchModal({ openSearch, items, setOpenSearch, setInputValue, inputValue }) {
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onClickClose = () => {
    setOpenSearch(!openSearch);
    setInputValue('');
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
        <button onClick={() => onClickClose()}>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="02a2246a-c490-48c5-9c0a-e59d6f5d3a79">
            <title id="02a2246a-c490-48c5-9c0a-e59d6f5d3a79">Close</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"></rect>
              <path
                d="M19.4666667,3.47267316 L20.5273268,4.53333333 L13.0596732,11.9996732 L20.5273268,19.4666667 L19.4666667,20.5273268 L11.9996732,13.0596732 L4.53333333,20.5273268 L3.47267316,19.4666667 L10.9386732,11.9996732 L3.47267316,4.53333333 L4.53333333,3.47267316 L11.9996732,10.9386732 L19.4666667,3.47267316 Z"
                fill="#000000"></path>
            </g>
          </svg>
        </button>
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
