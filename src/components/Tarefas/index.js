import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useState } from "react";
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
  TarefasConcluidas,
} from "./styles";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tarefa = () => {
  const { tarefas, token, fetchTarefas, searchTerm } = useAuth();
  //convertendo o formato da data para 'ano/mês/dia' (YYYY-MM-DD)
  const converterFormatoData = (data) => {
    const partesData = data.split("/");
    if (partesData.length === 3) {
      return `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
    }
    return data;
  };

  
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = (idTarefa) => {
    setTarefaSelecionada(idTarefa);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/tarefas/apagar", {
        data: { id },
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error("Não foi possível excluir a tarefa", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        "http://localhost:4000/tarefas/atualizarStatus",
        {
          id_tarefa: id,
          status: status ? "concluida" : "",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchTarefas();
    } catch (error) {
      console.error("Não foi possível atualizar o status da tarefa", error);
    }
  };

  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  const toggleShowCompletedTasks = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  const tasksToShow = showCompletedTasks
    ? [...tarefas].filter(
        (tarefa) =>
          tarefa.status === "concluida" || tarefa.status === "finalizada"
      )
    : [...tarefas].filter(
        (tarefa) =>
          tarefa.status !== "concluida" && tarefa.status !== "finalizada"
      );

  const tasksToShowOrdenadas = tasksToShow.sort((a, b) => {
    const dataA = new Date(converterFormatoData(a.data_fim)).getTime();
    const dataB = new Date(converterFormatoData(b.data_fim)).getTime();
    return dataA - dataB;
  });

  //Editar Tarefas
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = (tarefa) => {
    setTarefaSelecionada(tarefa);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  // Função para filtrar as tarefas

  const filteredTasks = tarefas.filter((tarefa) => {
    return (
      tarefa.nome_tarefa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tarefa.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  const tasksToShowFiltered = tasksToShowOrdenadas.filter((tarefa) => {
    return (
      tarefa.nome_tarefa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tarefa.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <>
      <TarefasConcluidas onClick={toggleShowCompletedTasks}>
        {showCompletedTasks ? "Mostrar Pendentes" : "Mostrar Concluidas"}
      </TarefasConcluidas>
      <ContainerPaiLembretes>
        {searchTerm !== ""
          ?
            filteredTasks.map((tarefa) => (
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
            ))
          :
            tasksToShowFiltered.map((tarefa) => (
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

export default Tarefa;
