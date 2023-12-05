import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import areaTrabalho from "../../assets/areaTrabalho.png";
import {
  AppBody,
  Main,
  Link,
  ImageLogo,
  ContainerLogo,
  MainTitle,
  MainText,
  ImageDesktop,
  FooterLifeTidy,
  ContainerFooter,
  FooterTop,
  FooterLogo,
  FooterLinks,
  StyledUl,
  StyledLi,
  FooterBottom,
  PFooter,
  ImageLogoFooter,
  Header,
  Nav,
  ContainerNav,
  LinkLandingPage,
  UniqueLink,
  ImageLogoH,
  ContainerLogoH,
} from "./styles";

const App = () => {
  const navigate = useNavigate();

  return (
    <AppBody>
      <Header id="topo">
        <Nav>
          <ContainerNav>
            <ContainerLogoH>
              <Link onClick={() => navigate("/")}>
                <ImageLogoH src={logo} alt={"Logo-LifeTidy"} />
              </Link>
            </ContainerLogoH>
            <LinkLandingPage onClick={() => navigate("/")}>
              Página Inicial
            </LinkLandingPage>
          </ContainerNav>
          <ContainerNav>
            <LinkLandingPage onClick={() => navigate("/cadastro")}>
              CADASTRO
            </LinkLandingPage>
            <UniqueLink onClick={() => navigate("/login")}>LOGIN</UniqueLink>
          </ContainerNav>
        </Nav>
      </Header>
      <Main>
        <ContainerLogo id="topo">
          <Link onClick={() => navigate("/")}>
            <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
          </Link>
        </ContainerLogo>
        <MainTitle>
          Sua solução completa para organização pessoal e produtividade.
        </MainTitle>
        <MainText>
          LifeTidy é uma plataforma inovadora de organização pessoal projetada
          para simplificar sua vida e maximizar sua produtividade. Com uma
          combinação perfeita de recursos intuitivos, LifeTidy capacita você a
          gerenciar suas tarefas e compromissos de forma eficiente.
        </MainText>
        <ImageDesktop src={areaTrabalho} alt="Area-de-trabalho" />
        <MainText>
          Com LifeTidy, você pode criar listas de tarefas personalizadas,
          atribuir prazos, estabelecer prioridades e acompanhar seu rendimento
          em um único lugar. A interface simples e amigável permite que você
          adicione facilmente novas tarefas, visualize suas atividades em
          diferentes modos de exibição e receba lembretes inteligentes para
          manter-se no caminho certo.
        </MainText>
        <MainText>
          Desfrute de uma vida mais organizada, produtiva e equilibrada com
          LifeTidy. Simplifique suas tarefas, conquiste seus objetivos e
          aproveite ao máximo cada dia. Experimente agora mesmo e transforme a
          maneira como você se organiza e prospera!
        </MainText>
      </Main>
      <FooterLifeTidy>
        <ContainerFooter>
          <FooterTop>
            <FooterLogo>
              <Link onClick={() => navigate("/")}>
                <ImageLogoFooter src={logo} alt="LifeTidy Logo" />
              </Link>
            </FooterLogo>
            <FooterLinks>
              <StyledUl>
                <StyledLi onClick={() => navigate("/")}>
                  Página Inicial
                </StyledLi>
                <StyledLi onClick={() => navigate("/")}>Recursos</StyledLi>
                <StyledLi>
                  <Link href="#topo">Sobre Nós</Link>
                </StyledLi>
              </StyledUl>
            </FooterLinks>
          </FooterTop>
          <FooterBottom>
            <PFooter>Todos os direitos reservados &copy; 2023 LifeTidy</PFooter>
          </FooterBottom>
        </ContainerFooter>
      </FooterLifeTidy>
    </AppBody>
  );
};

export default App;