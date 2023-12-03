import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import "./customModalStyles.css"; 
import {
  ContainerAdicionarTarefa,
  ContainerH2Tarefa,
  StyledIcon,
  H2AdicionarTarefa,
  InputSelect,
  TextArea,
  ContainerButtonExit,
  FormDetalhesTarefas,
  ContainerCategoria,
  H4InfomacoesInputs,
  SelectInputsWidth,
  ContainerImportancia,
  ContainerInicio,
  ContainerInicioConclusaoHorario,
  ContainerConclusao,
  ContainerDescricaoTarefa,
  DivButtonNovaTarefa,
  ButtonCriarTarefa,
  ButtonCancelar,
  CustomLoader,
  ContainerCustomLoader,
} from "./styles";

const NovaTarefaModal = ({ isOpen, closeModal }) => {
  const [formState, setFormState] = useState({
    nome_tarefa: "",
    descricao: "",
    categoria: "",
    data_inicio: "",
    data_fim: "",
    hora_inicio: "",
    hora_fim: "",
    importancia: "",
    status: "",
  });
  const { fetchTarefas } = useAuth();
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post("https://lifetidy.onrender.com/tarefas/adicionar", formState, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchTarefas();
      closeModal();
    } catch (error) {
      console.error(error);
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
      <ContainerAdicionarTarefa>
        <ContainerH2Tarefa>
          <H2AdicionarTarefa>ADICIONAR TAREFA</H2AdicionarTarefa>
          <ContainerButtonExit>
            <StyledIcon icon={faClose} onClick={closeModal} />
          </ContainerButtonExit>
        </ContainerH2Tarefa>
        <FormDetalhesTarefas onSubmit={handleSubmit}>
          <ContainerCategoria>
            <H4InfomacoesInputs>CATEGORIA</H4InfomacoesInputs>
            <SelectInputsWidth
              name="categoria"
              id="categoria"
              value={formState.categoria}
              onChange={handleChange}
            >
              <option value="">Sem</option>
              <option value="ESTUDO">ESTUDO</option>
              <option value="COMPRAS">COMPRAS</option>
              <option value="AGENDA">AGENDA</option>
            </SelectInputsWidth>
          </ContainerCategoria>
          <ContainerImportancia>
            <H4InfomacoesInputs>IMPORTÂNCIA</H4InfomacoesInputs>
            <SelectInputsWidth
              name="importancia"
              id="importancia"
              value={formState.importancia}
              onChange={handleChange}
            >
              <option value="">Sem</option>
              <option value="URGENTE">URGENTE</option>
              <option value="REGULAR">REGULAR</option>
              <option value="BAIXA">BAIXA</option>
            </SelectInputsWidth>
          </ContainerImportancia>
          <ContainerInicio>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>INÍCIO</H4InfomacoesInputs>
              <InputSelect
                type="date"
                name="data_inicio"
                id="data_inicio"
                value={formState.data_inicio}
                onChange={handleChange}
              />
            </ContainerInicioConclusaoHorario>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>HORÁRIO</H4InfomacoesInputs>
              <InputSelect
                type="time"
                name="hora_inicio"
                value={formState.hora_inicio}
                onChange={handleChange}
              />
            </ContainerInicioConclusaoHorario>
          </ContainerInicio>
          <ContainerConclusao>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>CONCLUSÃO</H4InfomacoesInputs>
              <InputSelect
                type="date"
                name="data_fim"
                value={formState.data_fim}
                onChange={handleChange}
              />
            </ContainerInicioConclusaoHorario>
            <ContainerInicioConclusaoHorario>
              <H4InfomacoesInputs>HORÁRIO</H4InfomacoesInputs>
              <InputSelect
                type="time"
                name="hora_fim"
                value={formState.hora_fim}
                onChange={handleChange}
              />
            </ContainerInicioConclusaoHorario>
          </ContainerConclusao>
          <ContainerDescricaoTarefa>
            <H4InfomacoesInputs>NOME</H4InfomacoesInputs>
            <TextArea
              type="text"
              id="tarefa"
              name="nome_tarefa"
              maxLength={50}
              required
              value={formState.nome_tarefa}
              onChange={handleChange}
            ></TextArea>
          </ContainerDescricaoTarefa>

          <ContainerDescricaoTarefa>
            <H4InfomacoesInputs>DESCRIÇÃO</H4InfomacoesInputs>
            <TextArea
              type="text"
              name="descricao"
              maxLength={120}
              value={formState.descricao}
              onChange={handleChange}
            ></TextArea>
          </ContainerDescricaoTarefa>
          <ContainerCustomLoader>
          {isLoading && <CustomLoader />}
          </ContainerCustomLoader>
          <DivButtonNovaTarefa>
            <ButtonCriarTarefa type="submit" disabled={isLoading}>
              CRIAR TAREFA
            </ButtonCriarTarefa>
            <ButtonCancelar onClick={closeModal}>CANCELAR</ButtonCancelar>
          </DivButtonNovaTarefa>
        </FormDetalhesTarefas>
      </ContainerAdicionarTarefa>
    </Modal>
  );
};

export default NovaTarefaModal;
