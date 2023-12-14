import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerPaiLembretes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const TarefasConcluidas = styled.button`
height: 1.8em;
padding: 0 6px;
  border: none;
  border-radius: 25px;
  background-color: #0a3950;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: 1.5s ease;
  position: relative;
  bottom: 3.2em;
    left: 11em;
 
  &:hover {
    background-color: #2f6f8e;
  }

  @media (max-width: 555px) {
    bottom: 1em;
    left: 0.5em;
  }

`
export const Container = styled.div``;
export const ContainerLembretes = styled.div`
  background-color: #ffffff;
  border-radius: 17px;
  padding: 8px 6px;
  display: flex;
  margin-bottom: 10px;
  margin: 1em 0 0.8em 1em;

  @media (max-width:555px){
    margin: 1em 0;
  }
`;

export const InformacoesLembretes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
export const H2 = styled.h2`
  color: #333333;
  margin: 4px;
  max-width: 137px;
  font-size: 14px;
  word-break: break-word;
`;
export const Prazos = styled.div`
  display: flex;
  align-items: center;
`;
export const H4 = styled.h4`
  color: #333333;
  margin: 3px;
  font-size: 12px;
`;
export const P = styled.p`
  color: #333333;
  margin: 3px;
  font-size: 12px;
`;
export const ContainerCheckbox = styled.div`
  display: flex;
  background-color: #d9d9d9;
  border-radius: 17px;
  padding: 4px;
  margin: 10px 0 5px 0;
`;
export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const H4Checkbox = styled.h4`
  display: flex;
  margin: 2px;
  align-items: center;
  font-size: 12px;
`;
export const DescricaoLembretes = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextBox = styled.div`
  display: flex;
`;

export const LinkTextBox = styled.a`
  margin: 0 9px 5px 0;
  padding: 3px 5px;
  background-color: #333333;
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 22px;
  width: 65px;
  justify-content: center;
`;
export const PPrioridade = styled.p`
  margin: 0;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 22px;
  height: 22px;
  width: 70px;
  color: #fff;
  justify-content: center;
  font-size: 12px;
  background-color: ${(props) => {
    switch (props.prioridade) {
      case "URGENTE":
        return "#EA4335";
      case "REGULAR":
        return "#1B0BD7";
      case "BAIXA":
        return "#008000";
      default:
        return "#333333";
    }
  }};
`;

export const DescricaoDetalhada = styled.div`
  display: flex;
  background-color: #d9d9d9;
  padding: 7px;
  border-radius: 15px;
  min-height: 100px;
  width: 150px;
  word-break: break-word;
`;

export const IconDescricao = styled.p`
 font-size: 12px;
 font-weight: bolder;
 
`;

export const EditarExcluir = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 20px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
`;
