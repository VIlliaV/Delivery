import { useEffect, useState } from 'react';
import { Container } from './ShoppingCart.styled';
import {
  changeLocalAdd,
  changeLocalCompany,
  getLocalAdd,
} from 'services/Local/local';
import MenuCard from 'components/MenuCard/MenuCard';
import User from 'components/User/User';
import Button from 'components/Button/Button';
import { putUserData } from 'services/API';

const ShoppingCart = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const rerenderPageForFilter = () => {
    const isAdded = getLocalAdd();
    const addedMenu = isAdded.map(item => (item = item.menuItem));
    setOrder(addedMenu);
  };

  useEffect(() => {
    if (!getLocalAdd()) changeLocalAdd([]);
    rerenderPageForFilter();
  }, []);

  const changeTotal = itemCoast => {
    setTotal(prevState => prevState + itemCoast);
  };

  const onSubmit = user => {
    user.menu = order;
    putUserData(user);
    setTotal(0);
    setOrder([]);
    changeLocalAdd([]);
    changeLocalCompany(0);
  };

  return (
    <Container>
      <div className="shop_info">
        <User onSubmit={onSubmit} />
        <div className="shop_menu">
          <ul>
            {order.map(menuItem => (
              <MenuCard
                key={menuItem.id}
                changeTotal={changeTotal}
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
          <div className="shop_total">
            <p>Total: {total} грн</p>
            <Button type="submit" form="user-form">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCart;
