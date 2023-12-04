import styled from "styled-components";

export const AppBody = styled.div`
  background-color: #ffffff;
`;

export const Header = styled.header`
  margin: 2em;

  @media (max-width: 550px) {
    margin: 1em;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContainerLogo = styled.div`
  max-width: 20px;
  margin-left: 1em;
  min-width: 115px;
  margin-left: 0;
  @media (max-width: 330px) {
    min-width: 50px;
    max-width: 60px;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: #242424;
  font-size: 15px;
  transition: color 0.3s ease;
  font-weight: bold;

  margin-right: ${(props) => (props.$linkLogo ? "0" : "20px")};

  &:hover {
    color: #21325a;
  }
`;

export const LinkLandingPage = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 17px;
  font-weight: 600;
  margin-left: 2em;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  @media (max-width: 450px) {
    display: ${(props) => (props.$remove ? "none" : "display: inline-block")};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #000000;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: #5f98b4;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 5px;
    font-size: 80%;
  }
`;

export const UniqueLink = styled(LinkLandingPage)`
  background-color: #d9d9d9;
  padding: 0.7em 3.8em;
  border-radius: 25px;
  left: 19px;
  &:hover::after {
    width: 80%;
    left: 19px;
  }

  @media (max-width: 768px) {
    padding: 0.7em 2em;
  }
`;

export const Main = styled.main``;

export const ContainerPrincipal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const TextsApresentacao = styled.div`
  width: 100%;
  text-align: center;
`;

export const H1TextApresentacao = styled.h1`
  margin: 1em 0.2em 0 0.2em;
`;

export const PTextApresentacao = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0.2em 0.5em;
`;

export const ContainerDivs = styled.div`
  width: 100%;
  margin-top: 2.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ImgExibicaoTelaInicial = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  max-width: 1265px;
`;

export const DivInformacoes = styled.div`
  background-color: #343e57;
  box-shadow: inset 0px 4px 4px #00000040;
  width: 100%;
  padding-bottom: 50px;
`;

export const DivInformacoesLeftRight = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    border-right: 3px solid #ffffff;

    @media (max-width: 912px) {
      border-right: none;
    }
  }
`;

export const H2Informacoes = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 27px;
  margin: 15px;
`;

export const DivTodasInformacoes = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.$primary ? "center" : "space-evenly")};
`;

export const DivInformacoesComIcones = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5em;
`;

export const TextsInformacoes = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  max-width: 31em;
`;

export const IconsApresentacao = styled.img`
  filter: invert(100%);
  margin-right: 1em;
`;

export const ContainerTarefas = styled.div`
  width: 100%;
  background-color: #1f2b49;
  box-shadow: inset 0px 4px 4px #00000040;
  padding: 50px 5px 100px 5px;
`;

export const DivTodasInformacoesTarefasLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Ul = styled.ul`
  padding-left: 21px;
  max-width: 27.5em;
  margin: 16px 0;
`;

export const ImgExemploAdicionarTarefaWiki = styled.img`
  max-width: 460px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const TextsInformacoesListas = styled.li`
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  max-width: 30.5em;
  margin-top: 12px;
`;

export const ImgExemploAdicionarTarefa = styled.img`
  max-width: 500px;
  width: 100%;
`;

export const DivTodasInformacoesTarefasRight = styled.div`
  margin: 40px 10px 0 10px;
`;

export const ContainerNotificacoes = styled.div`
  width: 100%;
  background-color: #1d313b;
  box-shadow: inset 0px 4px 4px #00000040;
  padding: 50px 5px 100px 5px;
`;

export const ContainerInformativoRendimento = styled.div`
  width: 100%;
  box-shadow: inset 0px 4px 4px #00000040;
  padding: 50px 5px 100px 5px;
  background-color: #192429;
`;

export const DivTextsInformacoesListas = styled.div`
  background-color: #d9d9d9;
  border-radius: 35px;
  max-width: 455px;
  padding: 40px 8px 40px 20px;
  margin: 10px 10px;
`;

export const InformativoRendimentoListItem = styled.li`
  color: #000000;
  font-size: 18px;
  font-weight: 600;
`;

export const ContainerMarcadores = styled(ContainerNotificacoes)``;

export const DivTextsInformacoesListasMarcadores = styled(
  DivTextsInformacoesListas
)`
  max-width: 1070px;
  margin: 25px;
`;

export const H2Marcadores = styled.h2`
  margin-top: 0;
  text-align: ${(props) => (props.$marcadortitulo ? "center" : "none")};
  color: ${(props) => (props.$marcadortitulo ? "#FFFFFF" : "#000")};
  font-size: ${(props) => (props.$marcadortitulo ? "27px" : "")};
  margin: ${(props) => (props.$marcadortitulo ? "15px" : "")};
`;

export const PMarcadores = styled.p`
  font-size: 19px;
`;

export const FooterLifeTidy = styled.footer`
  background-color: #ffffff;
  padding: 10px 0;
  box-shadow: inset 0px 4px 4px #00000040;
`;

export const ContainerFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FooterLogo = styled.div`
  width: min-content;
`;

export const ImageLogoFooter = styled.img`
  min-width: 100px;
  width: 100%;
  height: 100%;
  margin: 11px 0 0 11px;
  cursor: pointer;
`;

export const FooterLinks = styled.div``;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: #242424;
  font-size: 15px;
  transition: color 0.3s ease;
  font-weight: bold;

  @media (max-width: 471px) {
    margin-left: 11px;
  }

  &:hover {
    color: #21325a;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
`;

export const PFooter = styled.p`
  font-size: 12px;
  color: #242424;
  margin: 0;
`;
