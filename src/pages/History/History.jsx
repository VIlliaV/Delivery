import noOrder from 'images/noOrder.jpg';
import { useState } from 'react';

import { fetchUserData, fetchUserDataByID } from 'services/API/APIUsers';
import { Container } from './History.styled';
import { toast } from 'react-hot-toast';
import MenuCard from 'components/MenuCard/MenuCard';
import { dateFormater } from 'utils/data';

const History = () => {
  const [allOrder, setAllOrder] = useState([]);

  const findUser = async event => {
    const email = event.target.value;

    if (event.key === 'Enter') {
      const data = await fetchUserData();
      const isUserAdded = data.find(item => item.email === email);

      if (isUserAdded) {
        const { menu } = await fetchUserDataByID(isUserAdded.id);

        setAllOrder(menu);
      } else {
        toast.success(`зробіть хоч одне замовлення)))`);
      }
    }
  };

  return (
    <Container>
      <input
        type="email"
        placeholder="delivery@testy.com"
        onKeyDown={findUser}
        required
        autoComplete="email"
      />
      <div className="shop_menu">
        {!allOrder.length ? (
          <div className="noOrder">
            <h2>Please enter your email</h2>
            <img src={noOrder} alt="no order" width="600" height="600" />
          </div>
        ) : (
          <>
            <ul>
              {allOrder.map(order => (
                <li className="past_allOrder">
                  <p className="past_data">Date: {dateFormater(order.id)} </p>
                  <ul className="past_order">
                    {order.order.map(menuItem => (
                      <MenuCard
                        vivsibleForHistory={false}
                        key={menuItem.id}
                        menuItem={menuItem}
                        visible="false"
                        companyId={() => {}}
                        styleCart={{
                          flexDirectionCart: 'row',
                          widthImg: '140',
                          widthDiv: '200',
                        }}
                      />
                    ))}
                  </ul>
                  <div className="shop_total">
                    <p>Total: {order.totalPrice} грн</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Container>
  );
};

export default History;
