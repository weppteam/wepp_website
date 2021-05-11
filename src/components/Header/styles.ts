import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 2rem;
  box-shadow: 0 10px 20px rgb(0, 0, 0, 0.02);

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    grid-column: 1/-1;

    & > h1 {
      margin-right: 3rem;
      cursor: pointer;
    }

    & > nav {
      display: none;
      margin: 0 1rem;

      & > a {
        font-size: 1.2rem;
        font-weight: 500;
        transition: 0.5s;
        cursor: pointer;

        :hover {
          letter-spacing: 2px;
          font-weight: 700;
          transition: 0.5s;
        }
      }

      & > div {
        position: absolute;
        top: 80%;
        opacity: 0;
        transition: 0.5s;
        background: #fff;
        padding: 1rem;
        max-width: 300px;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);
      }

      :hover {
        & > div {
          opacity: 1;
          transition: 0.5s;
        }
      }
    }

    @media (min-width: 600px) {
      & > nav {
        display: flex;
      }
      grid-column: 1;
      justify-content: flex-start;
    }

    & > section {
      display: flex;

      & > svg {
        font-size: 2rem;
      }

      @media (min-width: 600px) {
        display: none;
      }
    }
  }

  & > div:last-child {
    display: none;

    & > nav {
      & > a {
        font-size: 1.6rem;
        margin: 0 0.5rem;
      }
    }

    @media (min-width: 700px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;
export const SideBar = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 1;
  height: 20rem;
  background: #fafafa;
  min-width: 100%;
  transform: translateY(-100%);
  transition: 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  & > nav {
    display: flex;
    flex-direction: column;

    & > a {
      margin: 1rem 0;
      font-size: 1.5rem;
      font-weight: 500
    }
  }

  & > div {
    & > nav, a, svg {
      font-size: 1.4rem;
      margin: 0.2rem;
    }
  }

  ${(props) =>
    props.active &&
    css`
      transform: translateY(0);
      transition: 0.5s;
      box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);
    `}
`;
