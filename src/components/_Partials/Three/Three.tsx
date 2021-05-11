import React from "react";

import { ThreePageWrapper } from "./styles";

const Three: React.FC = () => {
  return (
    <ThreePageWrapper id="services">
      <div className="teste">
        <img src="/assets/foto1.png" alt="Imagem exemplo" />
        <img src="/assets/foto2.png" alt="Imagem exemplo" />
        <img src="/assets/foto3.png" alt="Imagem exemplo" />
      </div>

      <div>
        <section>
          <div>
            <p>Sites Modernos e Responsivos</p>
            <div />
            <p>
              Site com foco na sua empresa, dando destaque aos seus serviços e
              produtos com layouts responsivos e práticas modernas
            </p>
          </div>
          <div>
            <p>Blog Personalizado</p>
            <div />
            <p>
              Ter um blog personalizado é uma das melhores formas de iniciar um
              projeto online ou aumentar sua cartela de clientes e seguidores.
            </p>
          </div>
        </section>
        <section>
          <div>
            <p>SEO</p>
            <div />
            <p>
              Um site amigável para o google pode melhorar seu posicionamento nas pesquisas.
            </p>
          </div>
          <div>
            <p>Criação de sites</p>
            <div />
            <p>
              A criação de um ste é um dos passos na sua estratégia de negócio ou na criação da sua ideia. 
            </p>
          </div>
        </section>
      </div>
    </ThreePageWrapper>
  );
};

export default Three;
