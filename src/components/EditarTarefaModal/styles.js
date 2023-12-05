import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
`;

export const Dialog = styled.dialog`
  position: relative;
  border: none;
  background-color: transparent;
  border-radius: 25px;
  max-width: 58em;
  padding: 0;
  margin: 1em;
  border-radius: 15px;

  @media (max-height: 700px) {
    overflow-y: auto;
    max-height: 80vh;
  }
`;

export const ContainerAdicionarTarefa = styled.div``;

export const ContainerH2Tarefa = styled.div`
  background-color: #0a3950;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H2AdicionarTarefa = styled.h2`
  margin: 0 0.5em;
  font-size: 20px;
  color: #fff;
`;

export const ContainerButtonExit = styled.div`
  display: flex;
  justify-content: end;
  height: 36px;
  color: #fff;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0.1em 0.2em 0.8em 0;
  font-size: 30px;
  cursor: pointer;
`;
export const FormDetalhesTarefas = styled.form`
  background-color: #fff;
  padding-bottom: 2em;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-right: 10px;
`;

export const ContainerCategoria = styled.div`
  padding: 1em 0 0.7em 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const H4InfomacoesInputs = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  min-width: 7em;
`;

export const SelectInputsWidth = styled.select`
  width: 10.5em;
  background-color: #d9d9d9;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  height: 1.8em;
  margin-right: 3px;
`;
export const InputSelect = styled.input`
  background-color: #d9d9d9;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  width: 10em;
  height: 1.8em;
  margin-right: 3px;
  width: 90%;
  max-width: 10.5em;
`;
export const TextArea = styled.textarea`
  background-color: #d9d9d9;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 16px;
  height: 1.8em;
  margin-right: 3px;
  text-align: start;
  padding: 4px 0 0 10px;
  width: 90%;
  max-height: 80px;
`;

export const ContainerImportancia = styled.div`
  padding: 0.4em 0 0.7em 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerInicio = styled.div`
  padding: 0.4em 0 0.7em 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerInicioConclusaoHorario = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const ContainerConclusao = styled.div`
  padding: 0.4em 0 0.7em 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerDescricaoTarefa = styled.div`
  padding: 0.4em 0 0.7em 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const DivButtonNovaTarefa = styled.div`
  justify-content: space-evenly;
  display: flex;
  margin-top: 0.5em;
`;

export const ContainerCustomLoader = styled.div`
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
`

export const CustomLoader = styled.div`
  width: 40px;
  height: 40px;
  --c: radial-gradient(farthest-side, #5F98B4 92%, #0000);
  background: 
    var(--c) 50% 0, 
    var(--c) 50% 100%, 
    var(--c) 100% 50%, 
    var(--c) 0 50%;
  background-size: 8px 8px;
  background-repeat: no-repeat;
  animation: s8 0.6s linear infinite;
  position: relative;

  &::before {    
    content: "";
    position: absolute;
    inset: 0;
    margin: 3px;
    background: repeating-conic-gradient(#0000 0 35deg, #5F98B4 0 90deg);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 1px), #000 0);
    mask: radial-gradient(farthest-side, #0000 calc(100% - 1px), #000 0);
    border-radius: 50%;
  }

  @keyframes s8 { 
    100% { transform: rotate(.5turn) }
  }
`;

export const ButtonCriarTarefa = styled.button`
  height: 2.5em;
  width: 12em;
  border: none;
  border-radius: 25px;
  background-color: #0a3950;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: 1.5s ease;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: #2f6f8e;
  }
`;

export const ButtonCancelar = styled.div`
  height: 2.5em;
  width: 7em;
  border: none;
  border-radius: 25px;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 1.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #9e9e9e;
  }
`;
