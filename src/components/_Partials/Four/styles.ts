import styled from "styled-components";

export const FourPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  height: 100vh;
  background: #fafafa;

  & > div {
    width: min(600px, 90%);

    & > img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgb(0, 0, 0, 0.2);
      @media (max-width: 850px) {
        margin: 1rem 0;
      }
    }

    & > h1 {
      margin-bottom: 1rem;
    }

    & > p {
      font-size: clamp(1.3rem, 5vw, 1.4rem);
    }
    & > button {
      padding: 0.8rem 2rem;
      margin: 2rem 0;
      background: #fff;
      border: none;
      outline: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: #40464d;
      box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);
      transition: 0.5s;

      :hover {
        cursor: pointer;
        letter-spacing: 2px;
        font-weight: 700;
        transition: 0.5s;
        background: #dcb653;
        color: #000;
      }
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
