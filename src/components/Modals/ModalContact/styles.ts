import styled, { css } from "styled-components";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Container = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(500px, 100%);
  background: #fff;
  box-shadow: 0 10px 20px rgb(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transform: translateX(100%);
  transition: 0.5s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      transform: translateX(0);
      transition: 0.5s ease-in-out;
    `}

  & > h2 {
    font-size: clamp(1.3rem, 5vw, 1.6rem);
    font-weight: 600;
    margin-bottom: 10px;
  }

  & > p {
    font-size: clamp(0.9rem, 4vw, 1rem);
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

export const Form = styled.form`
  margin-top: 20px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid #030300;
  border-radius: 100px;
  font-size: clamp(0.9rem, 4vw, 1rem);
  margin-top: 10px;
  outline: none;
  background: transparent;
  font-weight: 500;
`;
export const Button = styled.button`
  background: #030300;
  border-radius: 100px;
  padding: 0.5rem 5rem;
  border: none;
  color: #fff;
  margin-top: 15px;
  font-size: clamp(0.9rem, 4vw, 1rem);
  cursor: pointer;
  outline: none;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: 700;
    transition: 0.5s;
    background: #dcb653;
    color: #000;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 0 5px;
  align-items: center;
  margin-top: 30px;

  & > nav {
    & > a {
      > svg {
        font-size: 1.4rem;
        margin: 0 0.4rem;

        :hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
