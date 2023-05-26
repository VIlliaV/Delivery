import { useParams } from 'react-router-dom';
import { Container } from './Menu.styled';
import { Loader } from 'components/Loader/Loader';
import MenuCard from 'components/MenuCard/MenuCard';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { fetchMenu, fetchPhoto } from 'services/API';

// import { fetchMenu, fetchPhoto } from 'services/API/APIFood';

const Menu = ({ companyId }) => {
  const [pending, setPending] = useState(true);
  const [menu, setMenu] = useState([]);
  const { menuId } = useParams();
  // console.log('🚀 ~ menuId:', menuId);

  useEffect(() => {
    if (!menuId) return;

    fetchMenu(menuId)
      .then(response => {
        // console.log('🚀 ~ response:', response);
        const { menu } = response;
        if (!menu.length) throw new Error('there is no menu for this company');
        fetchPhoto(menuId, menu.length)
          .then(response => {
            const { photos } = response;
            return photos;
          })
          .catch(error => {
            throw error;
          })
          .then(photos => {
            menu.map(
              (item, index) => (item.foodImg = photos[index].src.medium)
            );

            setMenu(menu);
          });
      })
      .catch(error => {
        toast.error(`${error.message}`);
      })
      .finally(setPending(false));
  }, [menuId]);

  return (
    <Container>
      {pending && menuId ? (
        <Loader />
      ) : (
        <>
          <ul>
            {menu.map(menuItem => (
              <MenuCard
                key={menuItem.id}
                menuItem={menuItem}
                menuId={menuId}
                visible="false"
                companyId={companyId}
              />
            ))}
          </ul>
        </>
      )}
    </Container>
  );
};

export default Menu;
