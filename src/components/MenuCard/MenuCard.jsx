import Button from 'components/Button/Button';
import { Card } from './MenuCard.styled';
import { changeLocalAdd, getLocalAdd } from 'services/Local/local';
import { useEffect, useState } from 'react';

const MenuCard = ({ menuItem, visible, ...other }) => {
  const [add, setAdd] = useState(false);
  const [priceCount, setPriceCount] = useState(1);
  const { id, dish, foodImg, price } = menuItem;

  useEffect(() => {
    if (!getLocalAdd()) changeLocalAdd([]);
    const isAdded = getLocalAdd()?.some(obj => obj.menuItem.id === id);

    isAdded ? setAdd(true) : setAdd(false);
  }, [id]);

  const handleAdd = () => {
    setAdd(!add);
    if (add === false) {
      changeLocalAdd([...getLocalAdd(), { menuItem, isAdded: true }]);
    } else {
      changeLocalAdd(getLocalAdd().filter(obj => obj.menuItem.id !== id));
    }
    const { rerender } = other;
    if (rerender) rerender();
  };

  const {
    styleCart: { flexDirectionCart, widthImg, widthDiv } = {
      flexDirectionCart: 'column',
      widthImg: '300',
      widthDiv: '300',
    },
  } = other;

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
        <div data-visible={visible}>
          <input
            value={priceCount}
            onChange={e => setPriceCount(+e.target.value)}
            pattern="\d+"
          />
          <button onClick={() => setPriceCount(priceCount + 1)}>+</button>
          <button
            onClick={() => setPriceCount(priceCount - 1)}
            disabled={!priceCount}
          >
            -
          </button>
        </div>
        <Button
          style={{
            width: widthDiv / 1.87,
            height: widthDiv / 7.5,
            // padding: widthImg / 30,
          }}
          type="button"
          onClick={handleAdd}
          data-is-add={add}
          // data-visible={visibleButton}
        >
          {add ? 'remove' : 'add to Cart'}
        </Button>
      </div>
    </Card>
  );
};

export default MenuCard;
