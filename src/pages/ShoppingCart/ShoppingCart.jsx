import { useEffect, useState } from 'react';
import { Container } from './ShoppingCart.styled';
import { changeLocalAdd, getLocalAdd } from 'services/Local/local';
import MenuCard from 'components/MenuCard/MenuCard';

const ShoppingCart = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (!getLocalAdd()) changeLocalAdd([]);
    const isAdded = getLocalAdd();

    const addedMenu = isAdded.map(item => (item = item.menuItem));

    setOrder(addedMenu);
  }, []);

  return (
    <Container>
      <ul>
        {order.map(menuItem => (
          <MenuCard
            key={menuItem.id}
            menuItem={menuItem}
            visibleButton="false"
          />
        ))}
      </ul>
    </Container>
  );
};

export default ShoppingCart;
