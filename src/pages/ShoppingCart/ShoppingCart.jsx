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
import noOrder from 'images/noOrder.jpg';
import { fetchUserData } from 'services/API/APIUsers';

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

  const onSubmit = async user => {
    user.menu = order;
    const data = await fetchUserData();
    const isUserAdded = data.find(item => item.email === user.email);
    if (isUserAdded) {
      console.log('вже додано :>> ', isUserAdded.id);
    } else putUserData(user);

    setTotal(0);
    setOrder([]);
    changeLocalAdd([]);
    changeLocalCompany('');
  };

  return (
    <Container>
      <div className="shop_info">
        <User onSubmit={onSubmit} />
        <div className="shop_menu">
          {!order.length ? (
            <div className="noOrder">
              <h2>Please make your choice first</h2>
              <img src={noOrder} alt="no order" width="600" height="600" />
            </div>
          ) : (
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
          )}

          <div className="shop_total">
            <p>Total: {total} грн</p>
            <Button type="submit" form="user-form" disabled={!total}>
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCart;
