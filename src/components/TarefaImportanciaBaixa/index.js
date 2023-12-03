import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import ModalExclusao from "../ModalExclusaoTarefa";
import EditarTarefaModal from "../EditarTarefaModal";
import {
  ContainerPaiLembretes,
  ContainerLembretes,
  InformacoesLembretes,
  Prazos,
  Checkbox,
  H4Checkbox,
  DescricaoLembretes,
  TextBox,
  LinkTextBox,
  DescricaoDetalhada,
  EditarExcluir,
  StyledIcon,
  H2,
  H4,
  P,
  ContainerCheckbox,
  PPrioridade,
  Container,
} from "./styles";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const TarefaImportanciaBaixa = () => {
  const [tarefasImportanciaBaixa, setTarefasImportanciaBaixa] = useState([]);
  const { token } = useAuth();
  const fetchTarefasImportanciaBaixa = async () => {
    try {
      const response = await axios.get(
        "https://lifetidy.onrender.com/tarefas/buscarBaixas",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTarefasImportanciaBaixa(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas de importância Baixa:", error);
    }
  };

  useEffect(() => {
    fetchTarefasImportanciaBaixa();
  }, [token]);

  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = (idTarefa) => {
    setTarefaSelecionada(idTarefa);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openEditModal = (tarefa) => {
    setTarefaSelecionada(tarefa);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("https://lifetidy.onrender.com/tarefas/apagar", {
        data: { id },
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTarefasImportanciaBaixa();
    } catch (error) {
      console.error("Não foi possível excluir a tarefa", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        "https://lifetidy.onrender.com/tarefas/atualizarStatus",
        {
          id_tarefa: id,
          status: status ? "concluida" : "",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchTarefasImportanciaBaixa();
    } catch (error) {
      console.error("Não foi possível atualizar o status da tarefa", error);
    }
  };

  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();

  const dataHoje = dia + "/" + mes + "/" + ano;

  const tarefasBaixasHoje = tarefasImportanciaBaixa.filter((tarefa) => {
    return tarefa.importancia === "BAIXA" && tarefa.data_fim === dataHoje;
  });
  return (
    <>
      <ContainerPaiLembretes>
        {tarefasBaixasHoje.map((tarefa) => (
          <ContainerLembretes key={tarefa.id_tarefa}>
            <InformacoesLembretes>
              <Container>
                <H2>{tarefa.nome_tarefa}</H2>
                <Prazos>
                  <H4>PRAZO:</H4>
                  <P>{tarefa.data_fim}</P>
                </Prazos>
                <Prazos>
                  <H4>HORÁRIO INICIAL:</H4>
                  <P>{tarefa.hora_inicio}</P>
                </Prazos>
                <Prazos>
                  <H4>HORÁRIO FINAL:</H4>
                  <P>{tarefa.hora_fim}</P>
                </Prazos>
              </Container>
              <ContainerCheckbox>
                <Checkbox
                  type="checkbox"
                  checked={tarefa.status === "concluida"}
                  onChange={(e) =>
                    handleStatusChange(tarefa.id_tarefa, e.target.checked)
                  }
                />
                <H4Checkbox>FINALIZADO</H4Checkbox>
              </ContainerCheckbox>
            </InformacoesLembretes>
            <DescricaoLembretes>
              <TextBox>
                {tarefa.categoria !== "" && (
                  <LinkTextBox href="#">{tarefa.categoria}</LinkTextBox>
                )}
                {tarefa.importancia !== "" && (
                  <PPrioridade prioridade={tarefa.importancia}>
                    {tarefa.importancia}
                  </PPrioridade>
                )}
              </TextBox>
              <DescricaoDetalhada>
                <P>
                  <strong style={{ fontSize: "13px" }}>Descrição: </strong>
                  {tarefa.descricao}
                </P>
              </DescricaoDetalhada>
            </DescricaoLembretes>
            <EditarExcluir>
              <StyledIcon
                icon={faTrash}
                onClick={() => openModal(tarefa.id_tarefa)}
              />
              <StyledIcon
                icon={faPencilAlt}
                onClick={() => openEditModal(tarefa)}
              />
            </EditarExcluir>
          </ContainerLembretes>
        ))}
      </ContainerPaiLembretes>
      {showModal && (
        <ModalExclusao
          isOpen={true}
          closeModal={closeModal}
          handleExclusao={() => handleDelete(tarefaSelecionada)}
        />
      )}
      {showEditModal && (
        <EditarTarefaModal
          isOpen={showEditModal}
          closeModal={closeEditModal}
          tarefa={tarefaSelecionada}
        />
      )}
    </>
  );
};

export default TarefaImportanciaBaixa;