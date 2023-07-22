import './App.scss';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Woman from './pages/Woman';
import Men from './pages/Men';
import Accessories from './pages/Accessories';
import Cart from './pages/Cart';

import Item from './pages/Item';
import axios from 'axios';
import SearchModal from './components/SearchModal';
import Drawer from './components/Drawer';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setIsLoaded } from './redux/slices/loadingSlice';
import { cartItem, onAdd } from './redux/slices/cartSlice';
import { useAppDispatch } from './redux/store';


//  for redux
//  onClickRemove
// onClickAdd
//  items

const App:React.FC = () => {
  const [openSearch, setOpenSearch] = React.useState<boolean>(false);
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState([]);
  const [filterBy, setFilterBy] = React.useState('all'); //filter для страницы accessories и axios запроса

  //get props from redux store
  const isLoaded = useSelector((state) => state.loadingSlice.isLoaded);
  const openDrawer = useSelector((state) => state.cartSlice.openDrawer);
  const cart = useSelector((state) => state.cartSlice.cart);
  console.log(isLoaded);
  const dispatch = useAppDispatch();

  //open search window logic
  openSearch
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  //get items from mockAPI
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse] = await Promise.all([
          axios.get(
            `https://641070ba45a5f98532468d6c.mockapi.io/items${
              filterBy !== 'all' ? `?category=${filterBy}` : ''
            }`,
          ),
        ]);
        setItems(itemsResponse.data);
        dispatch(setIsLoaded());
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }
    fetchData();
  }, [filterBy]);

  // type Item = {
  //   category: string;
  //   color: string;
  //   id: string;
  //   imageUR: string;
  //   isNew: string;
  //   price: number;
  //   sizes: [];
  //   title: string;
  //   type: string;
  // }

  const onClickAdd = (obj: cartItem) => {
    //add item to api
    axios.post(`https://641070ba45a5f98532468d6c.mockapi.io/cart/`, obj);
    //add item local
    dispatch(onAdd(obj));
  };

  
  return (
    <div className="App">
      <Header setInputValue={setInputValue} openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Drawer />
      <SearchModal
        inputValue={inputValue}
        setInputValue={setInputValue}
        items={items}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      <Routes>
        <Route
          path="/"
          element={<Home onClickAdd={onClickAdd} items={items}/>}
        />
        <Route
          path="/woman"
          element={<Woman onClickAdd={onClickAdd} items={items} />}
        />
        <Route
          path="/men"
          element={<Men onClickAdd={onClickAdd} items={items} />}
        />
        <Route
          path="/accessories"
          element={
            <Accessories
              setActiveFilter={setActiveFilter}
              activeFilter={activeFilter}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              items={items}
              onClickAdd={onClickAdd}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              setActiveFilter={setActiveFilter}
              activeFilter={activeFilter}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              cart={cart}
              onClickAdd={onClickAdd}
            />
          }
        />
        <Route path="item/:id" element={<Item onClickAdd={onClickAdd} />} />
      </Routes>
    </div>
  );
}

export default App;
