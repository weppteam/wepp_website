import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 4rem;
  padding: 5rem 2rem;
  max-height: 100%;
  background: #fafafa;

  & > div:first-child {
    & > h1 {
      font-size: clamp(1.8rem, 5vw, 2.6rem);
      font-weight: 800;
      margin: 1rem 0;
      width: min(800px, 100%);

      & > strong {
        color: #dcb653;
      }
    }
    & > p {
      font-size: clamp(1rem, 4vw, 1.5rem);
      font-weight: 400;
      width: min(800px, 90%);
    }
    grid-row: 2;
    padding-top: 5rem;

    @media (min-width: 1000px) {
      grid-row: auto;
      max-height: 100vh;
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

  & > div:last-child {
    display: none;

    & > div {
      display: grid;
      row-gap: 2rem;
      margin: 0 1rem;

      & > img {
        width: 7rem;
        border-radius: 100px;
        height: 10rem;
        object-fit: cover;
        box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);

        @media (min-width: 1000px) {
          width: 8.5rem;
          height: 20rem;
        }
      }
    }

    & > div:nth-child(1) {
      transform: translateY(-30%);
    }
    & > div:nth-child(2) {
      transform: translateY(-40%);
    }
    & > div:nth-child(3) {
      transform: translateY(-50%);
    }
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    padding: 5rem;

    & > div:last-child {
      display: flex;
      max-height: 100vh;
      margin-bottom: 2rem;
    }
  }
`;
