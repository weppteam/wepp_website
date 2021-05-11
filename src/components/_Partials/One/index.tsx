import React from 'react'
import { Container } from './styles'
import ModalContact from '../../Modals/ModalContact/index'
import ModalMessage from '../../Modals/ModalMessage/index'

interface InitialPageProps {
  modalContact: boolean
  modalMessage: boolean
  status: boolean
  setStatus(value: boolean): void
  setModalContact(value: boolean): void
  setModalMessage(value: boolean): void
}

const Initial: React.FC<InitialPageProps> = ({
  modalContact,
  modalMessage,
  status,
  setStatus,
  setModalContact,
  setModalMessage,
}) => {

  return (
    <React.Fragment>
      <Container id="initial">
        <div>
          <h1>
            Crie seu site profissional e coloque sua <strong>ideia</strong>{' '}
            online
          </h1>
          <p>
            Ter um site profissional é um passo fundamental para iniciar ou
            transformar seu negócio.{' '}
          </p>

          <button onClick={() => setModalContact(true)}>Entrar em contato</button>
        </div>

        <div>
          <div>
            <img
              src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
            <img
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
            <img
              src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
            <img
              src="https://images.pexels.com/photos/61120/pexels-photo-61120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
            <img
              src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
            <img
              src="https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Imagem Inicial"
            />
          </div>
        </div>
      </Container>

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
  )
}

export default Initial
