

import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";
import { useAuth } from "../../contexts/AuthContext";
import{
    AppBody,
    Main,
    ContainerMainPrincipal,
    ContainerEditarPerfil,
    ContainerPerfil,
    H2EditarPerfil,
    ContainerEsquerda,
    ContainerDireita,
    ContainerFotoPerfil,
    ContainerBotoes,
    ContainerBotoes2,
    ButtonEditar,
    ButtonExcluir,
    Container,
    Input,
    Form,
    H2,
    StyledIconEditar,
    StyledIconExcluir,
    ButtonEditarSenha,
    ButtonEditarNome,
    Link,


}from "./styles"
import {
  
    faTrash,
    faPencilAlt,
  } from "@fortawesome/free-solid-svg-icons";

const Perfil = () => {
    const { sideBarIsActive } = useAuth();
    return(
        <AppBody>
            <Header/>
            <ContainerMainPrincipal>
            <SideBar />
                <Main $isActive={sideBarIsActive}>
                <ContainerEditarPerfil>
                    <H2EditarPerfil>
                        Editar perfil
                    </H2EditarPerfil>
                    <ContainerPerfil>
                        <ContainerEsquerda>
                            <ContainerFotoPerfil>
                                
                            </ContainerFotoPerfil>
                            <ContainerBotoes>
                                <ButtonEditar>
                                
                  <StyledIconEditar icon={faPencilAlt}></StyledIconEditar>
                                </ButtonEditar>
                                <ButtonExcluir>
                                <StyledIconExcluir icon={faTrash}></StyledIconExcluir>

                                </ButtonExcluir>
                            </ContainerBotoes>

                        </ContainerEsquerda>
                        <ContainerDireita>
                        <Form>
                       
                        <Container>
                         <H2>
                        Nome de usuário
                    </H2>
                        <Input
                        type="text"
                        placeholder=""
                        required
                        autoFocus
                        name="nome_usuario"
                        
                        maxLength={40}
                        />
                    </Container>
                    
                    <Container>
                       <H2>
                        Senha
                    </H2>
                        <Input
                        type="password"
                        placeholder=""
                        required
                        name="senha"
                        
                        maxLength={30}
                        />
                    </Container>
                   
                    <Container>
                         <H2>
                        Telefone
                    </H2>
                        <Input
                        $lastinput={true}
                        type="tel"
                        placeholder=""
                        required
                        name="telefone"
                       
                        maxLength={15}
                        />
                    </Container>
                    <ContainerBotoes2>
                    <ButtonEditarSenha>
                                
                  <StyledIconEditar icon={faPencilAlt}></StyledIconEditar>
                  <Link>Editar senha</Link>
                    </ButtonEditarSenha>
                    <ButtonEditarNome>
                                
                  <StyledIconEditar icon={faPencilAlt}></StyledIconEditar>
                    <Link>Editar nome</Link>
                    </ButtonEditarNome>
                    </ContainerBotoes2>

                    </Form>
                    

                        </ContainerDireita>
                    </ContainerPerfil>
                </ContainerEditarPerfil>
                </Main>
            </ContainerMainPrincipal>
           
        </AppBody>
    );
};

export default Perfil;