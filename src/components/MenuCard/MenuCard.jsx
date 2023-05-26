import Button from 'components/Button/Button';
import { Card } from './MenuCard.styled';
import { useEffect, useState } from 'react';
import {
  changeLocalAdd,
  changeLocalCompany,
  getLocalAdd,
} from 'services/Local/local';

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
      changeLocalCompany('');
      companyId('');
    }
    const isAdded = getLocalAdd()?.some(obj => obj.menuItem.id === id);
    if (isAdded) {
      setAdd(true);
      setPriceCount(1);
    } else setAdd(false);
  }, [id, menuId, add, companyId]);

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
          }}
          type="button"
          onClick={handleAdd}
          data-is-add={add}
          title={
            add
              ? 'The product will be removed from the Shopping Cart'
              : 'The item should be added in the Shopping Cart'
          }
        >
          {add ? 'remove' : 'add to Cart'}
        </Button>
      </div>
    </Card>
  );
};

export default MenuCard;
