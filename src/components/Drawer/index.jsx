import React from 'react';
import styles from './Drawer.module.scss';
import ItemCard from '../ItemCart/';

const Drawer = ({ cart, setOpenDrawer, openDrawer }) => {
  return (
    <div
      style={
        openDrawer
          ? { visibility: 'visible', opacity: '1' }
          : { visibility: 'hidden', opacity: '0' }
      }
      className={styles.overlay}>
      <div
        style={openDrawer ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }}
        className={styles.cart}>
        <div>
          <div className={styles.cartHeader}>
            <h4>Your bag</h4>
            <button>
              <svg
                onClick={() => setOpenDrawer(!openDrawer)}
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
            {cart.map((item) => (
              <ItemCard {...item} />
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
