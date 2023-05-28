import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 110px 50px 110px;

  & .past_allOrder {
    border: 1px solid var(--second);
    border-radius: 5px;
    margin-bottom: 20px;
  }

  & .past_order {
    width: 100%;
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
    padding: 10px;
  }

  & .shop_total,
  .past_data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
  }

  & input {
    height: 30px;
    width: 50%;
    margin-bottom: 20px;
    padding-left: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid black;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;
