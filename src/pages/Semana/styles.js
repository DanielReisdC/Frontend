import styled from "styled-components";
export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;
export const ContainerMainPrincipalHoje = styled.div`
  display: flex;
`;
export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  left: ${(props) => (props.$isActive ? "0" : "-130px")};
  transition: 0.6s ease;
  transition-property: left;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const ContainerSubEsquerda = styled.div`
  background-color: #d9d9d9;
  padding: 20px 5px;
  border-radius: 15px;
  margin: 30px 5px 100px 5px;
  height: 730px;
  min-width: 346px;
  margin-bottom: 40px;
  width: 374px;
`;
export const ContainerSubDireita = styled.div`
  margin-left: 0;
  background-color: #d9d9d9;
  padding: 20px 5px;
  border-radius: 15px;
  margin: 30px 5px 100px 5px;
  height: 730px;
  min-width: 346px;
  margin-bottom: 40px;
  width: 374px;
`;
export const ContainerSubBaixo = styled.div`
  background-color: #d9d9d9;
  padding: 20px 5px;
  border-radius: 15px;
  margin: 30px 5px 100px 5px;
  height: 730px;
  min-width: 346px;
  margin-bottom: 40px;
  width: 374px;
`;
export const ContainerHoje = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PDataSemana = styled.div`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
`;

export const ContainerBorda = styled.div`
  margin-top: 0.5em;
  margin: 1em 0;
  width: 100%;
  height: 3px;
  background-color: #0a3950;
`;
export const ContainerTarefa = styled.div`
  height: 90%;
  background-color: #a8a3a3;
  padding: 10px 5px;
  margin: 0;
  border-radius: 25px;
  min-height: 300px;
  max-height: 534px;
  overflow-y: scroll;
  min-width: 300px;
`;
