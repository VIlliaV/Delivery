import { NavLinkStyle } from './ShowMenu.styled';

const ShowMenu = () => {
  const shopId = 'hello-shop';
  return <NavLinkStyle to={shopId}>Menu</NavLinkStyle>;
};

export default ShowMenu;
