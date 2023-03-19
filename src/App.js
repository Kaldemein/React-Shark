import './App.scss';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Woman from './pages/Woman';
import Men from './pages/Men';
import Accessories from './pages/Accessories';
import axios from 'axios';
import SearchModal from './components/SearchModal';
import Drawer from './components/Drawer/';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoaded } from './redux/slices/loadingSlice';

//  for redux
//  onClickRemove
// onClickAdd
//  items

//top
//joggers
//shirt
//shorts
//leggins
//pullover
//передать в card openDrawer

function App() {
  const [openSearch, setOpenSearch] = React.useState(false);
  // const [openDrawer, setOpenDrawer] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [activeFilter, setActiveFilter] = React.useState([]);
  const [filterBy, setFilterBy] = React.useState('all'); //filter для страницы accessories и axios запроса

  const isLoaded = useSelector((state) => state.loadingSlice.isLoaded);
  console.log(isLoaded);
  const dispatch = useDispatch();

  openSearch
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartResponse] = await Promise.all([
          axios.get(
            `https://641070ba45a5f98532468d6c.mockapi.io/items${
              filterBy !== 'all' ? `?category=${filterBy}` : ''
            }`,
          ),
          axios.get(`https://641070ba45a5f98532468d6c.mockapi.io/cart`),
        ]);
        setCart(cartResponse.data);
        setItems(itemsResponse.data);
        dispatch(setIsLoaded());
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }
    fetchData();
  }, [filterBy]);

  const onClickRemove = (id) => {
    console.log(id);
    axios.delete(`https://641070ba45a5f98532468d6c.mockapi.io/cart/${id}`).then((response) => {
      setCart((prev) => prev.filter((cartItem) => cartItem.id !== id));
    });
  };

  const onClickAdd = (obj) => {
    console.log(obj.id);
    axios.post(`https://641070ba45a5f98532468d6c.mockapi.io/cart/`, obj);
    setCart((prev) => [...prev, obj]);
  };

  return (
    <div className="App">
      <Header
        cart={cart}
        setInputValue={setInputValue}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      <Drawer items={items} onClickRemove={onClickRemove} cart={cart} />
      <SearchModal
        inputValue={inputValue}
        setInputValue={setInputValue}
        items={items}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home onClickAdd={onClickAdd} items={items} openSearch={openSearch} />}
        />
        <Route
          exact
          path="/woman"
          element={<Woman onClickAdd={onClickAdd} items={items} />}
          openSearch={openSearch}
        />
        <Route
          exact
          path="/men"
          element={<Men onClickAdd={onClickAdd} items={items} />}
          openSearch={openSearch}
        />
        <Route
          exact
          path="/accessories"
          element={
            <Accessories
              setActiveFilter={setActiveFilter}
              activeFilter={activeFilter}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              items={items}
            />
          }
          openSearch={openSearch}
        />
      </Routes>
    </div>
  );
}

export default App;
