import SideMenu from 'components/SideMenu/SideMenu';
import { Container } from './Shop.styled';
import Menu from 'components/Menu/Menu';

const Shop = () => {
  return (
    <Container>
      <SideMenu />
      <Menu />
    </Container>
  );
};

export default Shop;
