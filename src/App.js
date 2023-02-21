import './App.scss';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Woman from './pages/Woman';
import Men from './pages/Men';
import axios from 'axios';
import SearchModal from './components/SearchModal';
import Drawer from './components/Drawer/';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [cart, setCart] = React.useState([]);

  openSearch
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');
  openDrawer
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  React.useEffect(() => {
    axios.get(`http://localhost:4000/items`).then((response) => {
      setItems(response.data);
    });
    axios.get(`http://localhost:4000/cart`).then((response) => {
      setCart(response.data);
    });
  }, []);

  const onClickRemove = (id) => {
    axios.delete(`http://localhost:4000/items/id`).then((response) => {});
  };

  return (
    <div className="App">
      <Header
        items={items}
        setInputValue={setInputValue}
        openSearch={openSearch}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        setOpenSearch={setOpenSearch}
      />
      <Drawer cart={cart} setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
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
