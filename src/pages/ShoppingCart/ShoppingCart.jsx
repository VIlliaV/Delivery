import { useEffect, useState } from 'react';
import { Container } from './ShoppingCart.styled';
import { changeLocalAdd, getLocalAdd } from 'services/Local/local';
import MenuCard from 'components/MenuCard/MenuCard';
import User from 'components/User/User';

const ShoppingCart = () => {
  const [order, setOrder] = useState([]);

  const rerenderPageForFilter = () => {
    const isAdded = getLocalAdd();
    const addedMenu = isAdded.map(item => (item = item.menuItem));
    setOrder(addedMenu);
  };

  useEffect(() => {
    if (!getLocalAdd()) changeLocalAdd([]);
    rerenderPageForFilter();
  }, []);

  return (
    <Container>
      <div className="shop_info">
        <User />
        <ul>
          {order.map(menuItem => (
            <MenuCard
              key={menuItem.id}
              menuItem={menuItem}
              visible="true"
              rerender={rerenderPageForFilter}
              styleCart={{
                flexDirectionCart: 'row',
                widthImg: '140',
                widthDiv: '200',
              }}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ShoppingCart;
