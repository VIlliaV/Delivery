import SideMenu from 'components/SideMenu/SideMenu';
import { Container } from './Shop.styled';
import Menu from 'components/Menu/Menu';

const Shop = () => {
  return (
    <Container>
      <SideMenu />
      <h1>Shop</h1>
      <Menu />
    </Container>
  );
};

export default Shop;
