import { Container, NavStyle } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Container>
      <ul className="list">
        <li>
          <NavStyle to="shop">Shop</NavStyle>
        </li>
        <li>
          <NavStyle to="cart">Shopping Cart</NavStyle>
        </li>
        <li>
          <NavStyle to="history">History</NavStyle>
        </li>
      </ul>
    </Container>
  );
};
