import React, { FormEvent, useState } from "react";
import { FiInstagram, FiGithub } from "react-icons/fi";
import axios from "axios";
import {
  Container,
  CloseIcon,
  Form,
  Input,
  Button,
  SocialIcons,
} from "./styles";

interface ModalProps {
  active: boolean;
  close(value: boolean): void;
  setStatus(value: boolean): void;
  setModalMessage(value: boolean): void;
}

const ModalContact: React.FC<ModalProps> = ({ ...props }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSendInfos = async (e: FormEvent) => {
    e.preventDefault();
    if (name === "" || email === "") {
      setError("Preenche as informações corretamente");
    } else {
      const response = await axios.post("./api/send", {
        name,
        email,
      });
      const { status } = response.data;
      if (status) {
        props.setModalMessage(true);
        props.setStatus(true);
        props.close(false);
        setName("");
        setEmail("");
        setError("");
      } else {
        props.setModalMessage(false);
        props.setStatus(false);
        props.close(false);
        setName("");
        setEmail("");
        setError("");
      }
    }
  };
  return (
    <Container active={props.active}>
      <CloseIcon onClick={() => props.close(false)} />
      <h2>Entre em contato</h2>
      <p>Informe suas informações abaixo</p>

      <Form onSubmit={handleSendInfos}>
        {error !== "" && <p>{error}</p>}
        <Input
          type="text"
          value={name}
          placeholder="Informe seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          placeholder="Informe seu E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>

      <SocialIcons>
        <nav>
          <a href="https://www.instagram.com/weppti/" target="_blank">
            <FiInstagram />
          </a>
          <a href="https://github.com/weppteam" target="_blank">
            <FiGithub />
          </a>
        </nav>
      </SocialIcons>
    </Container>
  );
};

export default ModalContact;
