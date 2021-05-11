import React, { useState } from 'react'
import Initial from '../components/_Partials/One'
import SeoComponent from '../components/SeoComponent/index'
import Second from '../components/_Partials/Second'
import Three from '../components/_Partials/Three/Three'
import Four from '../components/_Partials/Four'

const Home: React.FC = () => {
  const [modalContact, setModalContact] = useState(false)
  const [modalMessage, setModalMessage] = useState(false)
  const [status, setStatus] = useState(false)

  return (
    <>
      <SeoComponent
        title="Wepp"
        url="https://wepp.vercel.app/"
        keywords="Sites profissionais, criação de sites, criação de sites para negócios online."
        desc="Criação de sites profissionais e otimizados, criação de sites para negócios online."
        index="index"
      />
      <Initial
        status={status}
        setStatus={setStatus}
        modalContact={modalContact}
        setModalContact={setModalContact}
        modalMessage={modalMessage}
        setModalMessage={setModalMessage}
      />
      <Second />
      <Three />
      <Four 
        status={status}
        setStatus={setStatus}
        modalContact={modalContact}
        setModalContact={setModalContact}
        modalMessage={modalMessage}
        setModalMessage={setModalMessage}
      />
    </>
  );
}

export default Home
