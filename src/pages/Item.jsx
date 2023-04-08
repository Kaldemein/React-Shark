import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setOpenDrawer,
  closeDrawer,
  setCart,
  onRemove,
  onAdd,
  onChooseSize,
} from '../redux/slices/cartSlice';

const Item = ({ onClickAdd }) => {
  const [item, setItem] = React.useState();
  const { id } = useParams();
  const { activeSize, setActiveSize } = React.useState(null);

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(`https://641070ba45a5f98532468d6c.mockapi.io/items/${id}`);
        setItem(data);
      } catch (error) {
        alert('Ошибка при загрузке товара');
      }
    }
    fetchItem();
  }, []);

  if (!item) {
    return 'Загрузка...';
  }

  return (
    <div className="item">
      <div className="container">
        <div className="left-block">
          <div className="upper-images">
            <img src={item.imageURL2} alt="" />
            <img src={item.imageURL3} alt="" />
          </div>
          <img src={item.imageUR} alt="" />
        </div>
        <div className="right-block">
          <div className="right-block-header">
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
          </div>
          <h3>{item.type}</h3>
          <h2 className="sizes-title">Select size</h2>
          <div className="sizes">
            {item.sizes.map((size) => (
              <button onClick={() => onChooseSize(size)} className="size">
                {size}
              </button>
            ))}
          </div>
          <div className="add-buttons">
            <button onClick={() => onClickAdd(item)} className="bag">
              Add to bag
            </button>
            <button className="wishlist">Add to wishlist</button>
          </div>
          <div className="description-block">
            <h3>DESCRIPTION</h3>
            <h4>POWER. MADE TO FAIL IN.</h4>
            <p>
              Lifting is the pursuit of failure. Fail hard. Fail fast. Fail with gusto. Fail with
              pride. Fail together. Until one day, you don't. The Power collection is made to fail
              with you, time and time again. Durable fabrics support you through every lift, while
              ribbed detailing gives you the freedom to flex and move without distractions. The
              Power collection. With you until failure. <br /> - Oversized fit <br /> - Durable
              material <br /> - Dropped shoulder <br /> - Stretchy ribbed neck <br /> - Straight hem
              <br /> - Large screen-printed Gymshark logo to back - <br /> 95% Cotton, <br />
              5% Elastane <br />- Model is 6'0" and wears size M - SKU: A2A1X-UBZF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
