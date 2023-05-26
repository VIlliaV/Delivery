import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 0 30%;
  max-width: 30vw;
  & label {
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: var(--primary);

    & span {
      width: 20%;
    }
    & input {
      height: 30px;
      min-width: 60%;
      padding-left: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      border: 1px solid black;
      box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }
  }
`;
