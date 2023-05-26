import Button from 'components/Button/Button';
import { Card } from './MenuCard.styled';
import {
  changeLocalAdd,
  changeLocalCompany,
  getLocalAdd,
} from 'services/Local/local';
import { useEffect, useState } from 'react';

const MenuCard = ({ menuItem, visible, ...other }) => {
  const [add, setAdd] = useState(false);
  const [priceCount, setPriceCount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const { id, dish, foodImg, price } = menuItem;

  const {
    companyId,
    changeTotal = () => {},
    menuId,
    styleCart: { flexDirectionCart, widthImg, widthDiv } = {
      flexDirectionCart: 'column',
      widthImg: '300',
      widthDiv: '300',
    },
  } = other;

  useEffect(() => {
    const local = getLocalAdd();

    if (!local) {
      changeLocalAdd([]);
    } else if (!local.length) {
      changeLocalCompany(0);
      companyId(0);
    }
    const isAdded = getLocalAdd()?.some(obj => obj.menuItem.id === id);
    if (isAdded) {
      setAdd(true);
      setPriceCount(1);
    } else setAdd(false);
  }, [id, menuId, add]);

  useEffect(() => {
    setTotalItem(priceCount * +price);
  }, [price, priceCount]);

  useEffect(() => {
    const priceTotalItem = priceCount * +price;
    changeTotal(priceTotalItem - totalItem);
  }, [changeTotal, price, priceCount, totalItem]);

  const handleAdd = () => {
    if (add === false) {
      changeLocalAdd([...getLocalAdd(), { menuItem, isAdded: true }]);
      if (menuId) {
        companyId(menuId);
        changeLocalCompany(menuId);
      }
    } else {
      const priceTotalItem = priceCount * +price;
      changeTotal(-priceTotalItem);
      changeLocalAdd(getLocalAdd().filter(obj => obj.menuItem.id !== id));
    }
    setAdd(!add);
    const { rerender } = other;
    if (rerender) rerender();
  };

  const handleChange = e => {
    const input = e.target.value;
    const regex = /^\d+$/;
    if (input === '' || regex.test(input)) {
      setPriceCount(+input);
    }
  };

  return (
    <Card style={{ flexDirection: flexDirectionCart }}>
      <div className="food_images">
        <img
          src={foodImg || foodImg}
          alt={dish}
          width={300}
          height={225}
          style={{ width: widthImg, height: widthImg / 1.4 }}
        />
      </div>
      <div className="food_data">
        <p className="dish"> {dish} </p>
        <p className="price">{price} грн</p>
        {/* <div data-visible={visible}> */}
        <input
          className="input_quantity"
          data-visible={visible}
          type="number"
          value={priceCount}
          onChange={handleChange}
        />

        <Button
          style={{
            width: widthDiv / 1.87,
            height: widthDiv / 7.5,
            // padding: widthImg / 30,
          }}
          type="button"
          onClick={handleAdd}
          data-is-add={add}
        >
          {add ? 'remove' : 'add to Cart'}
        </Button>
      </div>
    </Card>
  );
};

export default MenuCard;
