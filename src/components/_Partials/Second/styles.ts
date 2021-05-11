import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  background-color: #fafafa;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    & > p {
      color: #1b1f23;
    }

    & > h2 {
      font-size: clamp(2rem, 5vw, 2.4rem);
      color: #1b1f23;
    }

    & > div {
      position: relative;
      height: 80px;
      background: #1b1f23;
      width: 2px;
      margin: 1rem 0;

      & > div {
        position: absolute;
        bottom: 0;
        transform: translate(-45%, -0%);
        border-radius: 100px;
        width: 30px;
        height: 30px;
        background: #1b1f23;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #fafafa;
        box-shadow: 0 10px 20px rgb(0, 0, 0, 0.2);
      }
    }

    & > section {
      display: grid;

      & > p {
        padding: 1rem 0;
        font-size: clamp(1rem, 5vw, 1.3rem);
        color: #666;
      }

      @media (min-width: 600px) {
        text-align: left;
        width: min(1000px, 90%);
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
      }
    }
  }
`
