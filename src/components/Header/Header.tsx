import React, { useState } from "react";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { HeaderWrapper, SideBar } from "./styles";

const Header: React.FC = () => {
  const [sideBar, setSideBar] = useState(false)

  const handleScrollToPosition = (id: any) => {
    const to = document.querySelector(id).offsetTop;

    window.scroll({
      top: to,
      behavior: "smooth",
    });
  };

  const moveSectionHome = (idAdress) => {
    handleScrollToPosition(idAdress)
    sideBar && setSideBar(false)
  }

  return (
    <React.Fragment>
      <HeaderWrapper>
        <div>
          <h1 onClick={() => moveSectionHome("#initial")}>wepp</h1>

          <nav>
            <a onClick={() => moveSectionHome("#digi")}>Digitalize</a>
            <div>
              <p>
                Saiba as vantagens de ter sua ideia ou negócio online.
              </p>
            </div>
          </nav>
          <nav>
            <a onClick={() => moveSectionHome("#services")}>Serviços</a>
            <div>
              <p>
                Conheça alguns dos nossos serviços.
              </p>
            </div>
          </nav>
          <nav>
            <a onClick={() => moveSectionHome("#about")}>Sobre</a>
            <div>
              <p>
                Saiba quem somos e entre em contato.
              </p>
            </div>
          </nav>

          <section>
            {sideBar ? (
              <HiX onClick={() => setSideBar(false)} />
            ) : (
              <HiMenuAlt1 onClick={() => setSideBar(true)} />
            )}
          </section>
        </div>

        <div>
          <nav>
            <a href="https://www.instagram.com/weppti/" target="_blank">
              <FiInstagram />
            </a>
            <a href="https://github.com/weppteam" target="_blank">
              <FiGithub />
            </a>
          </nav>
        </div>
      </HeaderWrapper>

      <SideBar active={sideBar}>
        <nav>
          <a onClick={() => moveSectionHome("#digi")}>Digitalize</a>
          <a onClick={() => moveSectionHome("#services")}>Serviços</a>
          <a onClick={() => moveSectionHome("#about")}>Sobre</a>
        </nav>

        <div>
          <nav>
            <a href="https://www.instagram.com/weppti/" target="_blank">
              <FiInstagram />
            </a>
            <a href="https://github.com/weppteam" target="_blank">
              <FiGithub />
            </a>
          </nav>
        </div>
      </SideBar>
    </React.Fragment>
  );
};

export default Header;
