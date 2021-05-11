import React from "react";
import { Container, Content, CloseIcon } from "./styles";

interface ModalProps {
  active: boolean
  title: string
  text: string
  close(value: boolean): void
}

const ModalMessage: React.FC<ModalProps> = ({ ...props }) => {
  return (
    <Container active={props.active}>
      <Content>
        <CloseIcon onClick={() => props.close(false)} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </Content>
    </Container>
  );
};

export default ModalMessage;
