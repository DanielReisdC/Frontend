import { useNavigate } from "react-router-dom";
import imgLandingPage from "../../assets/img-landingPage.png";
import iconAdicionar from "../../assets/adicionar.png";
import iconExcluir from "../../assets/excluir.png";
import iconRendimento from "../../assets/rendimento.png";
import iconNotificacao from "../../assets/notificacoes.png";
import imgTarefaWiki from "../../assets/adicionarTarefaWiki.png";
import imgAdicionarTarefa from "../../assets/adicionarTarefa.png";
import notificacoesWiki from "../../assets/notificacoesWiki.png";
import imgNotificacao from "../../assets/notificacoesIndex.png";
import imgInformativoRendimento from "../../assets/informativo-de-redimento.png";
import adicionarMarcador from "../../assets/adicionar-Marcador.png";
import logo from "../../assets/logo.png";
import mobileLogo from '../../assets/icon-logo.png';
import desktopLogo from '../../assets/logo.png';
import ResponsiveImage from './responsiveLogo';


import {
  AppBody,
  Header,
  Nav,
  ContainerNav,
  ContainerLogo,
  Link,
  LinkLandingPage,
  UniqueLink,
  Main,
  ContainerPrincipal,
  TextsApresentacao,
  H1TextApresentacao,
  PTextApresentacao,
  ContainerDivs,
  ImgExibicaoTelaInicial,
  DivInformacoes,
  H2Informacoes,
  DivTodasInformacoes,
  DivInformacoesLeftRight,
  DivInformacoesComIcones,
  IconsApresentacao,
  TextsInformacoes,
  ContainerTarefas,
  ContainerNotificacoes,
  ContainerInformativoRendimento,
  DivTodasInformacoesTarefasLeft,
  Ul,
  InformativoRendimentoListItem,
  DivTodasInformacoesTarefasRight,
  ImgExemploAdicionarTarefaWiki,
  ImgExemploAdicionarTarefa,
  DivTextsInformacoesListas,
  TextsInformacoesListas,
  ContainerMarcadores,
  H2Marcadores,
  PMarcadores,
  DivTextsInformacoesListasMarcadores,
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
} from "./styles";

const App = () => {
  const navigate = useNavigate();

  return (
    <AppBody>
      <Header id="topo">
        <Nav>
          <ContainerNav>
            <ContainerLogo>
              <Link $linkLogo onClick={() => navigate("/")}>
              <ResponsiveImage mobileImage={mobileLogo} desktopImage={desktopLogo} alt="Logo" />
              </Link>
            </ContainerLogo>
            <LinkLandingPage $remove onClick={() => navigate("/sobreNos")}>
              SOBRE NÓS
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
        <ContainerPrincipal>
          <TextsApresentacao>
            <H1TextApresentacao>
              ORGANIZE SUA ROTINA COM O LIFETIDY
            </H1TextApresentacao>
            <PTextApresentacao>
              ALCANCE O FOCO E O CONTROLE DA SUA AGENDA
            </PTextApresentacao>
          </TextsApresentacao>
          <ContainerDivs>
            <ImgExibicaoTelaInicial
              src={imgLandingPage}
              alt="Tela-de-Home-Imagem"
            />
          </ContainerDivs>
          <DivInformacoes>
            <H2Informacoes id="recursos">
              COM LIFETIDY VOCÊ PODE FAZER MAIS!
            </H2Informacoes>
            <DivTodasInformacoes $primary>
              <DivInformacoesLeftRight>
                <DivInformacoesComIcones>
                  <IconsApresentacao
                    src={iconAdicionar}
                    alt="icone-adicionar"
                  />
                  <TextsInformacoes>
                    ADICIONE DIVERSAS TAREFAS, QUANTAS VEZES FOREM NECESSÁRIAS,
                    PERSONALIZANDO AS CATEGORIAS DE ACORDO COM A NECESSIDADE.
                  </TextsInformacoes>
                </DivInformacoesComIcones>
                <DivInformacoesComIcones>
                  <IconsApresentacao src={iconExcluir} alt="icone-excluir" />
                  <TextsInformacoes>
                    QUE TAL EXCLUIR TAREFAS QUE NÃO SERÃO FEITAS? COM A OPÇÃO
                    “EXCLUIR TAREFA”, VOCÊ OTIMIZA AO MÁXIMO SUA LISTA DE
                    TAREFAS.
                  </TextsInformacoes>
                </DivInformacoesComIcones>
              </DivInformacoesLeftRight>
              <DivInformacoesLeftRight>
                <DivInformacoesComIcones>
                  <IconsApresentacao
                    src={iconNotificacao}
                    alt="icone-notificações"
                  />
                  <TextsInformacoes>
                    ESQUECEU DO SEU COMPROMISSO OU DA SUA TAREFA? A GENTE TE
                    LEMBRA! COM NOTIFICAÇÕES INTERNAS E EM POP UP, ESQUECER NÃO
                    SERÁ PROBLEMA.
                  </TextsInformacoes>
                </DivInformacoesComIcones>
                <DivInformacoesComIcones>
                  <IconsApresentacao
                    src={iconRendimento}
                    alt="icone-rendimento"
                  />
                  <TextsInformacoes>
                    QUER SABER O SEU RENDIMENTO PESSOAL? AQUI A GENTE TE MOSTRA,
                    COM GRÁFICOS DE RENDIMENTO SOBRE TAREFAS PENDENTES,
                    FINALIZADAS E A FAZER, VOCÊ VERÁ OS RESULTADOS EM PRIMEIRA
                    MÃO.
                  </TextsInformacoes>
                </DivInformacoesComIcones>
              </DivInformacoesLeftRight>
            </DivTodasInformacoes>
          </DivInformacoes>
          <ContainerTarefas>
            <H2Informacoes>
              ADICIONE TAREFAS DE MANEIRA FÁCIL E RÁPIDA!
            </H2Informacoes>
            <DivTodasInformacoes id="recursos">
              <DivTodasInformacoesTarefasLeft>
                <Ul>
                  <TextsInformacoesListas>
                    PERSONALIZE SUAS TAREFAS USANDO A SELEÇÃO DE CATEGORIAS E
                    GRAU DE IMPORTÂNCIA.
                  </TextsInformacoesListas>
                  <TextsInformacoesListas>
                    DEFINA PRAZOS PRECISOS PARA SUAS TAREFAS, UTILIZANDO A DATA
                    E HORA DESEJADAS.
                  </TextsInformacoesListas>
                </Ul>
                <ImgExemploAdicionarTarefaWiki
                  src={imgTarefaWiki}
                  alt="Imagem-exemplo-adicionar-tarefa-wiki"
                />
              </DivTodasInformacoesTarefasLeft>
              <DivTodasInformacoesTarefasRight>
                <ImgExemploAdicionarTarefa
                  src={imgAdicionarTarefa}
                  alt="Imagem-exemplo-adicionar-tarefa"
                />
              </DivTodasInformacoesTarefasRight>
            </DivTodasInformacoes>
          </ContainerTarefas>
          <ContainerNotificacoes>
            <H2Informacoes>
              INTERFACE DE NOTIFICAÇÕES DE FÁCIL COMPREENSÃO!
            </H2Informacoes>
            <DivTodasInformacoes>
              <DivTodasInformacoesTarefasLeft>
                <Ul>
                  <TextsInformacoesListas>
                    NOTIFICAÇÕES ORDENADAS DE ACORDO COM O GRAU DE URGÊNCIA OU
                    DATA.
                  </TextsInformacoesListas>
                  <TextsInformacoesListas>
                    INTERFACE INTUITIVA, AMIGÁVEL E DE FÁCIL ENTENDIMENTO.
                  </TextsInformacoesListas>
                </Ul>
                <ImgExemploAdicionarTarefaWiki
                  src={notificacoesWiki}
                  alt="Imagem-exemplo-adicionar-tarefa-wiki"
                />
              </DivTodasInformacoesTarefasLeft>
              <DivTodasInformacoesTarefasRight>
                <ImgExemploAdicionarTarefa
                  src={imgNotificacao}
                  alt="Imagem-exemplo-adicionar-tarefa"
                />
              </DivTodasInformacoesTarefasRight>
            </DivTodasInformacoes>
          </ContainerNotificacoes>
          <ContainerInformativoRendimento>
            <H2Informacoes>
              TENHA ACESSO AO SEU INFORMATIVO DE RENDIMENTOS
            </H2Informacoes>
            <DivTodasInformacoes>
              <DivTodasInformacoesTarefasLeft>
                <DivTextsInformacoesListas>
                  <Ul>
                    <InformativoRendimentoListItem>
                      PERSONALIZE SUAS TAREFAS USANDO A SELEÇÃO DE CATEGORIAS E
                      GRAU DE IMPORTÂNCIA.
                    </InformativoRendimentoListItem>
                    <InformativoRendimentoListItem>
                      DEFINA PRAZOS PRECISOS PARA SUAS TAREFAS, UTILIZANDO A
                      DATA E HORA DESEJADAS.
                    </InformativoRendimentoListItem>
                  </Ul>
                </DivTextsInformacoesListas>
              </DivTodasInformacoesTarefasLeft>
              <DivTodasInformacoesTarefasRight>
                <ImgExemploAdicionarTarefa
                  src={imgInformativoRendimento}
                  alt="Imagem-exemplo-adicionar-tarefa"
                />
              </DivTodasInformacoesTarefasRight>
            </DivTodasInformacoes>
          </ContainerInformativoRendimento>
          <ContainerMarcadores>
            <H2Marcadores $marcadortitulo>
              ADICIONE MARCADORES E GERÊNCIE SUAS TAREFAS!
            </H2Marcadores>
            <DivTodasInformacoes>
              <DivTodasInformacoesTarefasLeft>
                <Ul>
                  <TextsInformacoesListas>
                    ADICIONE TAREFAS DE ACORDO COM A SUA NECESSIDAE, AGRUPE E
                    SEPARE DE FORMA RÁPIDA E FÁCIL.
                  </TextsInformacoesListas>
                  <TextsInformacoesListas>
                    DEFINA PRAZOS PRECISOS PARA SEUS MARCADORES, UTILIZANDO A
                    DATA E HORA DESEJADAS.
                  </TextsInformacoesListas>
                </Ul>
              </DivTodasInformacoesTarefasLeft>
              <DivTodasInformacoesTarefasLeft>
                <ImgExemploAdicionarTarefa
                  src={adicionarMarcador}
                  alt="Imagem-exemplo-adicionar-tarefa"
                />
              </DivTodasInformacoesTarefasLeft>

              <DivTodasInformacoesTarefasRight>
                <DivTextsInformacoesListasMarcadores>
                  <H2Marcadores>O QUE SÃO MARCADORES? </H2Marcadores>
                  <PMarcadores>
                    MARCADORES SÃO COMO UMA ESPÉCIE DE TÍTULO, NA QUAL O USUÁRIO
                    PODE SEPARAR SUAS TAREFAS, A FIM DE ORGANIZAR-SE MELHOR. UM
                    MARCADOR PODE SER O NOME DE UMA MATÉRIA, DE UM CURSO OU
                    QUALQUER NOMECLATURA QUE FACILITE A SEPARAÇÃO DAS TAREFAS
                    (EX: ATIVIDADES DE MATEMÁTICA, ATIVIDADES DA SEMANA, CSS,
                    POO ETC.)
                  </PMarcadores>
                </DivTextsInformacoesListasMarcadores>
              </DivTodasInformacoesTarefasRight>
            </DivTodasInformacoes>
          </ContainerMarcadores>
        </ContainerPrincipal>
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
                <StyledLi>
                  <Link href="#topo">Página Inicial</Link>
                </StyledLi>
                <StyledLi>
                  <Link href="#recursos">Recursos</Link>
                </StyledLi>
                <StyledLi onClick={() => navigate("/sobreNos")}>
                  Sobre Nós
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
