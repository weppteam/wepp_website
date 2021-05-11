import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.section<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;

  transform: scale(0);
  transition: 0.5s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1);
      transition: 0.5s ease-in-out;
    `}
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: #fff;
  height: 300px;
  width: min(600px, 90%);
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.1);

  & > h3 {
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    font-weight: 600;
    margin-bottom: 10px;
  }

  & > p {
    font-size: clamp(0.9rem, 4vw, 1.2rem);
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #030300;
  font-size: 25px;
  cursor: pointer;
`;
