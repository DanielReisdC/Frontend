import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;
export const ContainerMainPrincipal = styled.div`
display: flex;
`;

export const Main = styled.main`
display: flex;
  
  width: 100%;
  position: relative;
  left: ${(props) => (props.$isActive ? "0" : "-130px")};
  transition: 0.6s ease;
  transition-property: left;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  @media (max-width:555px){
    left: 0;
  }
`;


export const ContainerEditarPerfil = styled.div`
background-color: #d9d9d9;

padding: 10px;
border-radius: 15px;
margin: 35px 5px;
min-width: 90%;
max-width: 1000px;
height: 82vh;

`;

export const ContainerPerfil = styled.div`
display:flex;
background-color: #FFF;
   
    
    padding: 10px 5px;
    margin: 0;
    border-radius: 10px;
    height: 430px;
   
    min-width: 300px;

`;

export const H2EditarPerfil = styled.h2`
font-size: 18px;
color: #333333;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
padding: 10px;

`;

export const ContainerEsquerda = styled.div`
width:50%;
display: flex;
flex-direction: column;
align-items: center;
  justify-content: center;
`;



export const ContainerFotoPerfil = styled.div`
border-radius: 100%;
background-color:black;
width:175px;
height:35vh;
margin-top:0;
 
`;

export const ContainerBotoes = styled.div`
  margin-top:30px;
  height:15px
`;
export const ContainerBotoes2 = styled.div`
  margin-top:50px;
  display:flex;
  height:15px
  
 
  
  
`;

export const ButtonEditar = styled.button`
  width:50px;
  height:30px;
  
  background-color: #D9D9D9;
  
  border-radius: 30px;
 border:none;

`;

export const ButtonExcluir = styled.button`
width:50px;
  height:30px;
  
  background-color: #D9D9D9;
 
  border-radius: 30px;
  border:none;
  margin-left:5px;
  

`;
export const StyledIconExcluir = styled(FontAwesomeIcon)`
color: #000;
cursor: pointer;
    font-size: 15px;
`;

export const StyledIconEditar = styled(FontAwesomeIcon)`
color: #000;
cursor: pointer;
    font-size: 15px;
    
`;
export const Link = styled.a`
margin-left:5px;
`;
export const ContainerDireita = styled.div`
width:50%;
display: flex;
flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
margin-top:20px;
  
  width:100%;
  
  &:first-of-type{
      border-left: 1px solid #000;
    padding-left: 18px;
    height:90%;
    }
 

  @media (max-width: 715px) {
    padding: 2em 1.5em 4em 1.5em;
  }

  @media (max-width: 555px) {
    padding: 0.8em 1.5em 4em 1.5em;
  }
`;
export const ButtonEditarSenha = styled.button`
  width:140px;
  height:30px;
  display:flex;
  background-color: #D9D9D9;
  align-items:center;
  justify-content:center;
  border-radius: 30px;
 border:none;
  

`;

export const ButtonEditarNome = styled.button`
width:140px;
  height:30px;
  display:flex;
  background-color: #D9D9D9;
  align-items:center;
  justify-content:center;
  border-radius: 30px;
  border:none;
  margin-left:5px;
  

`;
export const Container = styled.div`

 margin-top:10px;
  display: flex;
flex-direction: column;
width: 260px;
`;
export const Input = styled.input`
  border: none;
  border-radius: 10px;
  height: 40px;
  font-size: 17px;
  background-color: #D9D9D9;
  background-size: 25px;
  padding-left: 8px;
  min-width: 180px;
  margin-bottom: ${(props) => (props.$lastinput ? "15px" : "0")};
  &::placeholder {
    font-weight: bold;
  }

  @media (max-width: 555px) {
    min-width: 303px;
    &::placeholder {
      font-size: 13px;
    }
  }

  @media (max-width: 493px) {
    max-width: 225px;
    height: 30px;
    min-width: 0;
    font-size: 14px;
  }
`;
export const H2 = styled.h2`
font-size: 18px;
color: #333333;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);


`;