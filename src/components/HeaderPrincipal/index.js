import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import perfil from "../../assets/perfil.png";
import Modal from "../ModalTarefa/index.js";
import Desempenho from "../ModalDesempenho/index.js";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import mobileLogo from '../../assets/icon-logo.png';
import desktopLogo from '../../assets/logo.png';
import ResponsiveImage from '../LogoResponsiva/responsiveLogo.js';
import {
  ContainerHeader,
  ContainerLogo,
  ContainerButtons,
  InputPesquisa,
  ContainerButtonsModal,
  ButtonAdicionar,
  ButtonAviso,
  ButtonDesempenho,
  ContainerPerfil,
  LinkMenu,
  Pnome,
  ContainerImgPerfil,
  LinkPerfil,
  ImagePerfil,
  ContainerSubMenu,
} from "./styles";

const Header = ({ openModal, openModalDesempenho }) => {
  const { setSearchTerm } = useAuth();

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

  const navigate = useNavigate();
  const { userName, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showModalDesempenho, setShowModalDesempenho] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleModalDesempenho = () => {
    setShowModalDesempenho(!showModalDesempenho);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://lifetidy.onrender.com/usuarios/logout");
      logout();
      navigate("/");
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
      // Trate o erro conforme necessário
    }
  };

  return (
    <ContainerHeader>
      <ContainerLogo>
        <Link onClick={() => navigate("/")}>
        <ResponsiveImage mobileImage={mobileLogo} desktopImage={desktopLogo} alt="Logo" />
        </Link>
      </ContainerLogo>
      <ContainerButtons>
        <InputPesquisa
          maxLength={40}
          type="text"
          placeholder="PESQUISAR TAREFAS"
          onChange={handleSearch}
        />
        <ContainerButtonsModal>
          <ButtonAdicionar onClick={openModal}></ButtonAdicionar>
          <ButtonAviso></ButtonAviso>
          <ButtonDesempenho onClick={openModalDesempenho}></ButtonDesempenho>
        </ContainerButtonsModal>
      </ContainerButtons>
      <ContainerPerfil>
        <Pnome>{userName}</Pnome>
        <ContainerImgPerfil>
          <LinkPerfil onClick={toggleSubMenu}>
            <ImagePerfil src={perfil} alt={"Imagem-perfil"} />
          </LinkPerfil>
          <ContainerSubMenu $active={showSubMenu ? "true" : undefined}>
            <LinkMenu $desenvolvimento>EDITAR PERFIL</LinkMenu>
            <LinkMenu $desenvolvimento>CONFIGURAÇÕES</LinkMenu>
            <LinkMenu $lastLinkPerfil onClick={handleLogout}>
              SAIR
            </LinkMenu>
          </ContainerSubMenu>
        </ContainerImgPerfil>
      </ContainerPerfil>
      <Modal isOpen={showModal} closeModal={toggleModal} />
      <Desempenho
        isOpen={showModalDesempenho}
        closeModalDesempenho={toggleModalDesempenho}
      />
    </ContainerHeader>
  );
};

export default Header;
