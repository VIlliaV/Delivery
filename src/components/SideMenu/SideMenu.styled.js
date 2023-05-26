import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  position: fixed;
  left: 0;
  padding: 15px;
  min-width: 163.7px;

  & h2 {
    margin-bottom: 16px;
  }
`;

export const NavStyle = styled(NavLink)`
  display: flex;
  padding: 10px;
  margin-bottom: 25px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  text-shadow: 1px 1px 2px var(--shadow);
  color: var(--second);
  background-color: var(--back_primary);
  border: 1px solid var(--primary);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  &.active {
    padding: 10px;
    color: var(--back_primary);
    background-color: var(--active);
    border: 1px solid var(--second);
    border-radius: 5px;
  }
  &[data-stop='true'] {
    &.active {
      cursor: not-allowed;
      padding: 10px;
      color: var(--primary);
      background-color: var(--second);
      border: 1px solid var(--primary);
      border-radius: 5px;
    }
  }
`;
