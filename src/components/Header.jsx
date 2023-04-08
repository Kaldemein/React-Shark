import React from 'react';
import logoSvg from '../img/logoSvg.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenDrawer } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const Header = ({ openSearch, setOpenSearch, setInputValue }) => {
  const cart = useSelector((state) => state.cartSlice.cart);
  // const items = useSelector(state => state)
  const dispatch = useDispatch();

  const onClickSearch = () => {
    setOpenSearch(!openSearch);
    setInputValue('');
  };

  const onClickDrawer = () => {
    dispatch(setOpenDrawer());
  };

  return (
    <header>
      <div className="container">
        <div>
          <Link className="header__logo" to="/">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>REACTSHARK</h1>
            </div>
          </Link>
        </div>
        <ul className="header__nav">
          <li>
            <Link to="/woman">Women</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/accessories">accessories</Link>
          </li>
        </ul>
        <ul className="header__user-panel">
          <li>
            <div className="header__items" onClick={() => onClickSearch()}>
              <svg
                class="Styles__SearchIcon-sc-4mixh6-1 jmTqIw"
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="d9658b95-7c18-4508-894d-17bc7942dacf">
                <title id="d9658b95-7c18-4508-894d-17bc7942dacf">
                  <fontsninja-text
                    id="fontsninja-text-370"
                    class="fontsninja-family-variant_sans-serif_400_normal">
                    Search
                  </fontsninja-text>
                </title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g
                    transform="translate(-1217.000000, -57.000000)"
                    fill="#000000"
                    fill-rule="nonzero">
                    <g>
                      <path d="M1236.59048,75.4247619 L1231.82238,70.6566667 C1233.00429,69.2157143 1233.71667,67.37 1233.71667,65.3583333 C1233.71667,60.7440476 1229.97262,57 1225.35833,57 C1220.74,57 1217, 60.7440476 1217,65.3583333 C1217,69.972619 1220.74,73.7166667 1225.35833,73.7166667 C1227.37,73.7166667 1229.21167,73.0083333 1230.65262,71.8264286 L1235.42071,76.5904762 C1235.74452,76.9142857 1236.26667,76.9142857 1236.59048,76.5904762 C1236.91429,76.2707143 1236.91429,75.7445238 1236.59048,75.4247619 Z M1225.35833,72.0530952 C1221.66286,72.0530952 1218.65952,69.0497619 1218.65952,65.3583333 C1218.65952,61.6669048 1221.66286,58.6595238 1225.35833,58.6595238 C1229.04976,58.6595238 1232.05714,61.6669048 1232.05714,65.3583333 C1232.05714,69.0497619 1229.04976,72.0530952 1225.35833,72.0530952 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </li>
          <li>
            <div className="header__items">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.43785 5.44294C6.35498 3.51902 9.46346 3.51902 11.3806 5.44294C11.6162 5.67942 11.8224 5.93562 12 6.20413C12.1776 5.93562 12.3829 5.68025 12.6194 5.44294C14.5365 3.51902 17.645 3.51902 19.5622 5.44294C21.4212 7.30855 21.4775 10.2984 19.7312 12.2321L19.5622 12.4103L11.9992 20L4.43785 12.4103C2.52072 10.4863 2.52072 7.36685 4.43785 5.44294ZM18.4996 6.50172C17.1687 5.16609 15.0129 5.16609 13.6819 6.50172C13.5751 6.60898 13.4758 6.72321 13.3838 6.84443L13.2512 7.0315L12 8.9236L10.7488 7.0315C10.6219 6.83962 10.4779 6.66212 10.3181 6.50172C8.98714 5.16609 6.8313 5.16609 5.50038 6.50172C4.21418 7.79248 4.16824 9.85879 5.36268 11.205L5.50049 11.3516L11.999 17.875L18.4996 11.3515C19.7858 10.0607 19.8318 7.99441 18.6374 6.64826L18.4996 6.50172Z"
                  fill="black"></path>
              </svg>
            </div>
          </li>
          <li>
            <div className="header__items">
              <svg
                class="Styles__AccountIcon-sc-744ty0-5 kRqbv"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="804fd0b3-d3f4-49a3-8de4-abf1fc63fae7">
                <title id="804fd0b3-d3f4-49a3-8de4-abf1fc63fae7">Account</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 4.79092C13.5 2.53192 11.4849 0.700012 9 0.700012L8.782 0.704731C6.39831 0.808141 4.5 2.59836 4.5 4.79092V5.6091C4.5 7.8681 6.5151 9.70001 9 9.70001L9.218 9.69529C11.6017 9.59188 13.5 7.80166 13.5 5.6091V4.79092ZM8.84702 2.20332L9.014 2.19901L9.18583 2.20488C10.7822 2.28873 12 3.44567 12 4.79092V5.6091L11.9946 5.76395C11.9049 7.04676 10.7094 8.12918 9.15298 8.1967L8.96754 8.20036L8.78519 8.19546C7.21783 8.1113 6 6.95435 6 5.6091V4.79092L6.0054 4.63607C6.09507 3.35326 7.29059 2.27084 8.84702 2.20332ZM15.3594 12.6468C13.6548 12.1815 11.3274 11.7 9 11.7C6.6726 11.7 4.3452 12.1815 2.6406 12.6468C1.0773 13.0725 0 14.4972 0 16.1172V18H18V16.1172L17.9949 15.9238C17.913 14.3848 16.8602 13.0555 15.3594 12.6468ZM3.03471 14.0941C5.07704 13.5366 7.12428 13.2 9 13.2C10.8757 13.2 12.923 13.5366 14.9644 14.0939L15.1214 14.1434C15.9428 14.4386 16.5 15.2247 16.5 16.1172V16.499H1.5V16.1172L1.50646 15.9512C1.57496 15.0735 2.1823 14.3262 3.03471 14.0941Z"
                  fill="black"></path>
              </svg>
            </div>
          </li>
          <li>
            <div onClick={() => onClickDrawer()} className="header__items">
              <svg
                class="Styles__BagIcon-sc-744ty0-12 dsqEKk"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="6795d45c-2751-4e53-abcf-e7718e21d963">
                <title id="6795d45c-2751-4e53-abcf-e7718e21d963">Bag</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2121 3.55H15.8V18H0.5V3.55H4.08793C4.4824 1.6705 6.15692 0.25 8.15 0.25C10.1431 0.25 11.8176 1.6705 12.2121 3.55ZM10.6589 3.55C10.3193 2.55725 9.40342 1.8238 8.31676 1.75525L8.15 1.75C6.99106 1.75 5.99789 2.50685 5.64105 3.55H10.6589ZM14.299 5.049H1.999V16.499H14.299V5.049Z"
                  fill="black"></path>
              </svg>
              <span>{cart.length}</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
