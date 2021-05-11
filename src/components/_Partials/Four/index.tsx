import React from "react";
import ModalContact from "../../Modals/ModalContact";
import ModalMessage from "../../Modals/ModalMessage";

import { FourPageWrapper } from "./styles";

interface FourPageProps {
  modalContact: boolean;
  modalMessage: boolean;
  status: boolean;
  setStatus(value: boolean): void;
  setModalContact(value: boolean): void;
  setModalMessage(value: boolean): void;
}

const Four: React.FC<FourPageProps> = ({
  modalContact,
  modalMessage,
  status,
  setModalContact,
  setModalMessage,
  setStatus,
}) => {
  return (
    <React.Fragment>
      <FourPageWrapper id="about">
        <div>
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Imagem sobre nós"
          />
        </div>
        <div>
          <h1>Sobre a wepp</h1>
          <p>
            Compreender as necessidades de nossos clientes e buscar as melhores
            soluções que as atendam é nosso compromisso.
          </p>
          <button onClick={() => setModalContact(true)}>Entrar em contato</button>
        </div>
      </FourPageWrapper>

      <ModalContact
        active={modalContact}
        close={setModalContact}
        setStatus={setStatus}
        setModalMessage={setModalMessage}
      />
      <ModalMessage
        active={modalMessage}
        close={setModalMessage}
        title={status ? 'Informações enviadas sucesso!!' : 'Erro ao enviar :('}
        text={
          status
            ? 'Recebemos suas informações. Em breve entraremos em contato ;)'
            : 'Ocorreu um erro ao enviar as informações. Tente novamente mais tarde.'
        }
      />
    </React.Fragment>
  );
};

export default Four;
