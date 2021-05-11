import React from 'react'

import { Container } from './styles'

const Second: React.FC = () => {
  return (
    <Container id="digi">
      <div>
        <p>EXPLORE O MUNDO DIGITAL</p>
        <div>
          <div>
            1
          </div>
        </div>
        <h2>Digitalize</h2>
        <section>
          <p>
            Uma das principais vantagens de se ter um site para seu negócio é a
            praticidade em <strong>processos de vendas</strong> e{' '}
            <strong>marketing digital.</strong>
          </p>
          <p>
            A <strong>Captação de leads</strong> é um fatores mais importantes
            para a evolução de um negócio. Através de uma boa{' '}
            <strong>identidade visual</strong> é possível potencializar a
            captação de novos leads.
          </p>
        </section>
        <section>
          <p>
            É necessário atrair o seu público alvo atráves da qualidade dos seus
            produtos, serviços e uma boa estratégia de <strong>SEO</strong>.
          </p>
          <p>
            Um bom <strong>relacionamento</strong> com o cliente é um fator
            decisivo para fortalecimento e competividade da sua marca.
          </p>
        </section>
      </div>
    </Container>
  )
}

export default Second
