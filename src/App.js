import './App.scss';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Woman from './pages/Woman';
import Men from './pages/Men';
import axios from 'axios';
// import items from '../items.json';
import SearchModal from './components/SearchModal';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  openSearch
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  React.useEffect(() => {
    axios.get(`http://localhost:3004/items`).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header
        items={items}
        setInputValue={setInputValue}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      <SearchModal
        inputValue={inputValue}
        setInputValue={setInputValue}
        items={items}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      <Routes>
        <Route exact path="/" element={<Home items={items} openSearch={openSearch} />} />
        <Route exact path="/woman" element={<Woman items={items} />} openSearch={openSearch} />
        <Route exact path="/men" element={<Men items={items} />} openSearch={openSearch} />
      </Routes>
    </div>
  );
}

export default App;
