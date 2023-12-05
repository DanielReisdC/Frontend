import React from "react";
import Modal from "react-bootstrap/Modal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./customModalStyles.css";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import {
  SubContainerLogo,
  ContainerLogo,
  ImageLogo,
  H2Text,
  ContainerButtons,
  Buttons,
  Line,
  Container,
  StyledIcon,
  ContainerCustomLoader,
  CustomLoader,

} from "./styles";

const ExclusaoModal = ({ isOpen, closeModal, handleExclusao }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchTarefas } = useAuth();

  const handleExclusaoConfirmada = async () => {
    setIsLoading(true);
    try {
      await handleExclusao();
      fetchTarefas(); 
      closeModal();
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      dialogClassName="custom-modal-styles"
    >
      <Container>
        <ContainerLogo>
          <SubContainerLogo href="index.html">
            <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
          </SubContainerLogo>
          <StyledIcon icon={faClose} onClick={closeModal} />
        </ContainerLogo>
        <Line></Line>
        <H2Text>DESEJA REALMENTE EXCLUIR A TAREFA?</H2Text>
        <ContainerCustomLoader>
          {isLoading && <CustomLoader />}
          </ContainerCustomLoader>
        <ContainerButtons>
          <Buttons onClick={closeModal}>NÃO</Buttons>
          <Buttons disabled={isLoading} onClick={handleExclusaoConfirmada}>SIM</Buttons>
        </ContainerButtons>
      </Container>
    </Modal>
  );
};

export default ExclusaoModal;
