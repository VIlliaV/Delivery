import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  /* padding-top: 28px; */
  flex-direction: column;
  align-items: center;
  /* position: relative; */
  width: 300px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--second);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  & .food_images img {
    width: 300px;
    height: 225px;
    object-fit: cover;
    /* border-radius: 50%; */
    background-color: var(--back_primary);
    margin-bottom: 8px;
  }

  & .food_data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 8px;
  }
  & .dish {
    /* margin-top: 20px; */
    /* margin-bottom: 8px; */
  }
  & .price {
    /* margin-top: 20px; */
    font-size: 12px;
    /* margin-bottom: 8px; */
  }
  & [data-visible='false'] {
    display: none;
  }

  & .input_quantity {
    width: 40%;
    border: none;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  & button {
    margin-top: 10px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-bottom: 36px;
  }
`;
