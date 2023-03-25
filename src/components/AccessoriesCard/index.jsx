import React from 'react';
import style from './AccessoriesCard.module.scss';
import { useDispatch } from 'react-redux';
import { setOpenDrawer } from '../../redux/slices/cartSlice';
const AccessoriesCard = ({ id, isNew, title, color, price, imageUR, sizes, size, onClickAdd }) => {
  const [openSizes, setOpenSizes] = React.useState(false);
  const dispatch = useDispatch();
  const onClickSizes = (size) => {
    onClickAdd({ id, title, price, imageUR, color, isNew, size });
    dispatch(setOpenDrawer());
  };
  return (
    <div
      onMouseEnter={() => setOpenSizes(true)}
      onMouseLeave={() => setOpenSizes(false)}
      className={style.AccessoriesCard}>
      <img src={imageUR} alt="" />
      <div className={style.AccessoriesCard__info}>
        <div className={style.AccessoriesCard__right}>
          {isNew ? <p className={style.AccessoriesCard__isNew}>new</p> : ''}
          <p className={style.AccessoriesCard__title}>{title}</p>
          <p className={style.AccessoriesCard__color}>{color}</p>
        </div>
        <div className={style.AccessoriesCard__left}>
          <p className={style.AccessoriesCard__price}>$ {price}</p>
        </div>
      </div>
      <ul
        style={
          openSizes
            ? { visibility: 'visible', opacity: '1' }
            : { visibility: 'hidden', opacity: '0' }
        }
        className={style.AccessoriesCard__sizes}>
        {sizes ? (
          sizes.length === 0 ? (
            <button onClick={() => onClickSizes(null)} className={style.noSizeButton}>
              Add to cart
            </button>
          ) : (
            sizes.map((size) => (
              <li>
                <button onClick={() => onClickSizes(size)}>{size}</button>
              </li>
            ))
          )
        ) : null}
        {size ? 'Size: ' + size.toUpperCase() : null}
      </ul>
    </div>
  );
};

export default AccessoriesCard;
