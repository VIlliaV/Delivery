import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 50px 110px;
  & .shop_info {
    display: flex;
    & .shop_menu {
      flex: 1 0 70%;
      max-height: 60vh;
    }
    & ul {
      width: 100%;
      display: flex;

      justify-content: center;
      flex-wrap: wrap;
      gap: 35px;
      padding: 10px;
      /* max-width: 1600px; */

      overflow: auto;
      border: 1px solid var(--second);
      border-radius: 5px;
    }

    & .shop_total {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 10vh;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 22px;
    }
  }
`;
