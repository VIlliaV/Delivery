import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 50px 110px;
  & .shop_info {
    display: flex;
    & User {
    }
    & ul {
      flex: 1 0 50%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 35px;
      max-width: 1600px;
    }
  }
`;
