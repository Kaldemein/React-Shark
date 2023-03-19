import React from 'react';
import styles from './Drawer.module.scss';
import ItemCard from '../ItemCart/';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setOpenDrawer, closeDrawer, setCart, onRemove } from '../../redux/slices/cartSlice';

const Drawer = ({}) => {
  const openDrawer = useSelector((state) => state.cartSlice.openDrawer);
  const cart = useSelector((state) => state.cartSlice.cart);

  const dispatch = useDispatch();
  const drawerRef = React.useRef();
  const cartRef = React.useRef();

  //получаем товары в корзину
  const fetchCart = async () => {
    const cartResponse = await axios.get(`https://641070ba45a5f98532468d6c.mockapi.io/cart`);
    dispatch(setCart(cartResponse.data));
  };
  React.useEffect(() => {
    fetchCart();
  }, [cart.length]);

  const onClickRemove = (id) => {
    console.log(id);
    axios.delete(`https://641070ba45a5f98532468d6c.mockapi.io/cart/${id}`).then((response) => {
      dispatch(onRemove(id));
    });
  };

  //открыть-закрыть корзину
  const onClickClose = () => {
    dispatch(setOpenDrawer());
  };

  //Для закрытия окна щелчком мыши
  React.useEffect(() => {
    drawerRef.current.addEventListener('click', (event) => {
      if (!event.composedPath().includes(cartRef.current)) {
        dispatch(closeDrawer());
        // if (openDrawer) {
        //   dispatch(closeDrawer());
        // }
      }
    });
  }, []);

  return (
    <div
      ref={drawerRef}
      style={
        openDrawer
          ? { visibility: 'visible', opacity: '1' }
          : { visibility: 'hidden', opacity: '0' }
      }
      className={styles.overlay}>
      <div
        ref={cartRef}
        style={openDrawer ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }}
        className={styles.cart}>
        <div>
          <div className={styles.cartHeader}>
            <h4>Your bag</h4>
            <button>
              <svg
                onClick={() => onClickClose()}
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
          <div className="items">
            {cart.map((cartItem) => (
              <ItemCard onClickRemove={(id) => onClickRemove(id)} {...cartItem} />
            ))}
          </div>
        </div>
        <div className={styles.cartBottom}>
          <div className={styles.totalPrice}>
            <p>total</p>
            <p className="price">$155.00 USD</p>
          </div>
          <div className={styles.bottomButtons}>
            <button>Checkout</button>
            <button>Your bag</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
