import styled, { keyframes } from "styled-components";

const animate = keyframes`
    from {
        transform: translateX(20%)
    }
    to {
        transform: translateX(-20%)
    }
`;

export const ThreePageWrapper = styled.div`
  background: #fafafa;

  & > div:first-child {
    display: flex;
    justify-content: center;
    min-width: 100%;
    padding: 5rem 0;
    overflow: hidden;

    & > img {
      width: min(600px, 90%);
      margin: 0 2rem;
      box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);
      animation: ${animate} 5s ease-in-out alternate infinite;

      @media (max-width: 1000px) {
        animation: none;
      }
    }
    @media (max-width: 1000px) {
      justify-content: flex-start;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        background: transparent;
      }
    }
  }

  & > div:last-child {
    & > section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 5rem;
      padding: 2rem 5rem;

      > div {
        > p:first-child {
          font-weight: 700;
          font-size: clamp(1.5rem, 5vw, 1.7rem);
        }
        > div {
          width: 50%;
          height: 0.2rem;
          background: #c4c4c4;
          margin: 0.4rem 0;
        }
        > p:last-child {
          font-size: clamp(1.1rem, 5vw, 1.3rem);
        }
      }

      @media (max-width: 700px) {
        grid-template-columns: 1fr;
        row-gap: 4rem;
      }
      @media (max-width: 1000px) {
        padding: 2rem;
      }
    }
  }
`;
