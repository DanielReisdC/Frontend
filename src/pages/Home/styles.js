import styled from "styled-components";

export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;
export const ContainerMainPrincial = styled.div`

  display: flex;
`;
export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
    left: ${(props) => (props.$isActive ? "0" : "-130px")};
    transition: 0.6s ease;
    transition-property: left;
  justify-content: center;
  @media (max-width:555px){
    left: 0;
  }

`;
export const ContainerLembrete = styled.div`
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 15px;
  margin: 35px 5px;
  min-width: 82%;
  max-width: 1150px;
  min-height: 100vh;
`;

export const H2TelaInicial = styled.h2`
  font-size: 20px;
  color: #333333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  text-decoration: underline;
`;
