import Button from 'components/Button/Button';
import { Card } from './MenuCard.styled';
import { changeLocalAdd, getLocalAdd } from 'services/Local/local';
import { useEffect, useState } from 'react';

const MenuCard = ({ menuItem, visibleButton }) => {
  const [add, setAdd] = useState(false);

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
    //   rerender();
  };
  return (
    <Card>
      <div className="food_images">
        <img src={foodImg || foodImg} alt={dish} width={380} height={285} />
      </div>
      <p className="dish"> {dish} </p>
      <p className="price">{price} грн</p>
      <Button
        type="button"
        onClick={handleAdd}
        data-is-add={add}
        data-visible={visibleButton}
      >
        {add ? 'added' : 'add to Cart'}
      </Button>
    </Card>
  );
};

export default MenuCard;
