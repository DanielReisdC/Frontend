import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";
import NovaTarefaModal from "../../components/NovaTarefaModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  AppBody,
  Main,
  ContainerMainPrincipalHoje,
  ContainerSubEsquerda,
  ContainerSubDireita,
  ContainerSubBaixo,
  ContainerHoje,
  PDataSemana,
  ContainerBorda,
  ContainerTarefa,
} from "./styles";

const Semana = () => {
  const navigate = useNavigate();
  const { token, setUserName, logout } = useAuth(); 

  const [isModalBootstrapOpen, setIsModalBootstrapOpen] = useState(false);
  const { sideBarIsActive } = useAuth();

  const openModalBootstrap = () => {
    setIsModalBootstrapOpen(true);
  };

  const closeModalBootstrap = () => {
    setIsModalBootstrapOpen(false);
  };


  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (!token && !localToken) {
      logout()
      navigate('/login');
    } else {
      const authToken = token || localToken;
      axios
        .get("https://lifetidy.onrender.com/usuarios/buscarNome", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          const userName = response.data.usuarioNome;
          setUserName(userName);
          localStorage.setItem("userName", userName);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            
            logout(); 
            navigate("/login"); 
          } else {
            console.error("Erro ao buscar o nome do usuário:", error);
          }
        });
    }
  }, [navigate, setUserName, token, logout]);

  return (
    <AppBody>
      <Header openModal={openModalBootstrap} />
      <ContainerMainPrincipalHoje>
        <SideBar />
        <Main $isActive={sideBarIsActive}>
          <ContainerSubEsquerda>
            <ContainerHoje>
              <PDataSemana>14/06/2023</PDataSemana>
              <ContainerBorda></ContainerBorda>
              <ContainerTarefa></ContainerTarefa>
            </ContainerHoje>
          </ContainerSubEsquerda>
          <ContainerSubDireita>
            <ContainerHoje>
              <PDataSemana>15/06/2023</PDataSemana>
              <ContainerBorda></ContainerBorda>
              <ContainerTarefa></ContainerTarefa>
            </ContainerHoje>
          </ContainerSubDireita>
          <ContainerSubBaixo>
            <ContainerHoje>
              <PDataSemana>16/06/2023</PDataSemana>
              <ContainerBorda></ContainerBorda>
              <ContainerTarefa></ContainerTarefa>
            </ContainerHoje>
          </ContainerSubBaixo>
        </Main>
      </ContainerMainPrincipalHoje>
      {isModalBootstrapOpen && (
        <NovaTarefaModal
          isOpen={isModalBootstrapOpen}
          closeModal={closeModalBootstrap}
        />
      )}
    </AppBody>
  );
};

export default Semana;