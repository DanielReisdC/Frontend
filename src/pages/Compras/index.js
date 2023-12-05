import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";
import Modal from "../../components/ModalTarefa";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import{
AppBody,
Main,
ContainerMainPrincial,
ContainerButtonsAdicao,
LinkButtonAdicao,
StyledIcon,
ContainerComprasPrincial,
ContainerSubCompras,
ContainerCompras,
ContainerNomeLista,
StyledIconClipboard,
H3,
StyledIconExcluir,
StyledIconEditar,
ContainerBorda,
ContainerComprasTarefas,
ContainerWhite,
ButtonNew,
ContainerListasCompras,
ContainerListas,
InputCheckBox,
PListaQuantidade,
PListaNomeItem,
}from "./styles";
import {
    faPlus,
    faClipboardList,
    faTrash,
    faPencilAlt,

  } from "@fortawesome/free-solid-svg-icons";
  

const Compras = ()=>{
    const navigate = useNavigate();
  const { token, setUserName, logout } = useAuth(); // Obtendo o token do contexto de autenticação

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sideBarIsActive } = useAuth();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!token && !localToken) {
      // logout()
      //navigate('/login');
    } else {
      const authToken = token || localToken;
      axios
        .get("http://localhost:4000/usuarios/buscarNome", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          const userName = response.data.usuarioNome;
          setUserName(userName);
          localStorage.setItem("userName", userName); // Armazenar o nome do usuário no localStorage
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            // Se receber um status 401 (Não Autorizado), o token pode ser inválido ou expirado
            logout(); // Limpar os dados de autenticação
            navigate("/login"); // Redirecionar para a página de login
          } else {
            console.error("Erro ao buscar o nome do usuário:", error);
          }
        });
    }
  }, [navigate, setUserName, token, logout]);
    return(
        <AppBody>
            <Header openModal={openModal}  />
            <ContainerMainPrincial>
            <SideBar />
            <Main $isActive={sideBarIsActive}>
                <ContainerButtonsAdicao>
                    <LinkButtonAdicao>
                    <StyledIcon icon={faPlus}></StyledIcon>
                        ADICIONAR LISTA
                    </LinkButtonAdicao>
                </ContainerButtonsAdicao>

                <ContainerComprasPrincial>
                    <ContainerSubCompras>
                        <ContainerCompras>
                            <ContainerNomeLista>
                                <StyledIconClipboard icon={faClipboardList}>
                                    
                                </StyledIconClipboard>
                                <H3>Feira da Semana</H3>
                                <StyledIconExcluir icon={faTrash}></StyledIconExcluir>
                                <StyledIconEditar icon={faPencilAlt}></StyledIconEditar>
                            </ContainerNomeLista>
                            <ContainerBorda></ContainerBorda>
                            <ContainerComprasTarefas>
                                <ContainerWhite>
                                <ButtonNew></ButtonNew>
                                <ContainerListasCompras>
                                    <ContainerListas>
                                        <InputCheckBox type="checkbox"/>
                                        <PListaQuantidade>
                                          4
                                        </PListaQuantidade>
                                        <PListaNomeItem>
                                          fdsfsdfsdf 
                                        </PListaNomeItem>
                                        <StyledIconExcluir icon={faTrash}></StyledIconExcluir>
                                    </ContainerListas>
                                </ContainerListasCompras>

                                </ContainerWhite>
                                
                            </ContainerComprasTarefas>

                        </ContainerCompras>

                    </ContainerSubCompras>

                </ContainerComprasPrincial>

            </Main>
            </ContainerMainPrincial>
            {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} />}
        </AppBody>


    );

};
export default Compras;