import styled from "styled-components";
import New from "../../assets/new.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    justify-content: space-evenly;
`;
export const ContainerButtonsAdicao = styled.div`
background-color: #EEEAEA;
width: 97%;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
display: flex;
justify-content: space-evenly;
padding: 2em 0;
max-height: 9em;
`;

export const LinkButtonAdicao = styled.a`
background-color: #D9D9D9;
font-weight: bold;
font-size: 15px;
height: 48px;
width: 255px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 25px;
cursor: pointer;
box-shadow: 0px 2px 4px #00000033;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
padding-right: 9px;
`;



export const ContainerComprasPrincial = styled.div`
width: 97%;
    background-color: #D9D9D9;
    display: flex;
    border-radius: 25px;
    padding: 20px 5px;
    margin: 30px 5px 100px 5px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1150px;
`;

export const ContainerSubCompras = styled.div`
margin-bottom: 40px;
`;

export const ContainerCompras = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ContainerNomeLista = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 1em;
`;

export const StyledIconClipboard = styled(FontAwesomeIcon)`
cursor: pointer;
font-size: 19px;
`;

export const H3 = styled.h3`
margin: 0;
`;

export const StyledIconExcluir = styled(FontAwesomeIcon)`
color: #777;
cursor: pointer;
    font-size: 19px;
`;

export const StyledIconEditar = styled(FontAwesomeIcon)`
color: #777;
cursor: pointer;
    font-size: 19px;
`;

export const ContainerBorda = styled.div`
margin-top: 0.5em;
margin: 1em 0;
width: 100%;
height: 3px;
background-color: #0A3950;
`;

export const ContainerComprasTarefas = styled.div`
padding: 10px;
overflow-y: auto;
height: 90%;
background-color: #A8A3A3;

margin: 0;
border-radius: 25px;
min-height: 300px;
max-height: 534px;

min-width: 300px;
`;

export const ContainerWhite = styled.div`
background-color: #FFF;
    height: 95%;
    
    padding: 10px 5px;
    margin: 0;
    border-radius: 25px;
    min-height: 300px;
    max-height: 534px;
    overflow-y: scroll;
    min-width: 300px;

`;

export const ButtonNew = styled.button`
margin: 0px 0 10px 8px;
width: 30px;
height: 30px;
background-image: url(${New});
border: none;
background-size: cover;
background-color: transparent;
cursor: pointer;
`;
export const ContainerListasCompras=styled.div`
`;
export const ContainerListas=styled.div`
display: flex;
align-items: center;
`;
export const InputCheckBox=styled.input`
margin-right: 6px;
width: 20px;
height: 17px;
`;
export const PListaQuantidade = styled.div`
    font-size: 17px;
    font-weight: bold;
    border-bottom: 1px solid #000;
    margin: 8px 0;
    &:first-of-type{
      border-right: 2px solid #000;
    padding-right: 8px;
    }
`;
export const PListaNomeItem = styled.div`
font-size: 17px;
font-weight: bold;
border-bottom: 1px solid #000;
margin: 8px 0;
&:last-of-type {
  padding-left: 8px;
  min-width: 62%;
  max-width: 62%;
}
`;