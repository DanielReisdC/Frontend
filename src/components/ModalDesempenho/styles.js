import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Dialog = styled.dialog`
border: none;
background-color: transparent;
border-radius: 25px;
max-width: 58em;
padding: 0;
@media(max-width: 568px) {
  width: 90%;
        }
`;

export const DivAdicionarTarefa = styled.div`
  
`;

export const DivH2Tarefa = styled.div`
background-color: #0A3950;
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
color: #FFF;
`;

export const DivButtonExit = styled.div`
display: flex;
justify-content: end;
height: 36px;
`;
export const StyledIcon = styled.i`
margin: 0.1em 0.2em 0.8em 0;
font-size: 30px;
cursor: pointer;
`;
export const ContainerInformacoesModal = styled.div`
  
background-color: #FFF;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
`;



export const ContainerInformacoesConcluidasModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.5em;
max-width: 520px;

`;

export const MedalIcon = styled(FontAwesomeIcon)`
  
`;
export const H2Parabens = styled.h2`
margin: 12px 0 8px 0;
`;

export const PInformacoesDesempenho = styled.p`
text-align: center;
font-weight: bold;
margin-top: 0;
`;

export const DivBordaRedimento = styled.div`
width: 90%;
height: 3px;
background-color: #0A3950;
margin: 1em 0;
        width: 100%;
        margin-top: 0.5em;
`;

export const DivPorcentagemRedimento = styled.div`
  
`;

export const DivPorcentagemRedimentoDetalhada = styled.div`
  
`;