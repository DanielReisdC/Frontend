import styled from "styled-components";

import EmailIcon from "../../assets/email.png";
import senhaIcon from "../../assets/senha.png";

export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;

export const Main = styled.main`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 15px;
  padding: 2em 4em 4em 4em;
  align-items: center;

  @media (max-width: 715px) {
    padding: 2em 1.5em 4em 1.5em;
  }
  
  @media (max-width: 555px) {
    padding: 20px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ImageLogo = styled.img`
  display: flex;
  max-width: 341px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3c3b3b4d;
  @media (max-width: 388px) {
    max-width: 308px;
  }
  @media (max-width: 359px) {
    max-width: 228px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const EmailIcone = styled.div`
  width: 1.8em;
  height: 1.9em;
  background-image: url(${EmailIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: 8px;
  margin-right: 5px;
`;

export const PasswordIcone = styled(EmailIcone)`
  background-image: url(${senhaIcon});
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  height: 40px;
  margin-top: 15px;
  font-size: 17px;
  color: #3c3b3b;
  background-size: 25px;
  padding-left: 8px;
  min-width: 308px;
  margin-bottom: ${(props) => (props.$lastinput ? "15px" : "0")};
  &::placeholder {
    font-weight: bold;
    @media (max-width: 555px) {
      font-size: 13px;
    }
  }
  @media (max-width: 555px) {
    min-width: 280px;
    font-size: 14px;
  }

  @media (max-width: 390px) {
    min-width: 203px;
    font-size: 14px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding-top: 8px;
  align-items: center;
`;
export const PLogin = styled.p`
  font-weight: 700;
  margin-right: 5px;
  font-size: 13px;
  margin-bottom: 0;
`;
export const LinkSenha = styled.a`
  color: #5f98b4;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #0d4766;
    text-decoration: underline;
  }
`;

export const ContainerLoginCom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CustomLoader = styled.div`
  width: 32px;
  height: 32px;
  --c: radial-gradient(farthest-side, #5f98b4 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 6px 6px;
  background-repeat: no-repeat;
  animation: s8 0.5s linear infinite;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: 3px;
    background: repeating-conic-gradient(#0000 0 35deg, #5f98b4 0 90deg);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 1px),
      #000 0
    );
    mask: radial-gradient(farthest-side, #0000 calc(100% - 1px), #000 0);
    border-radius: 50%;
  }

  @keyframes s8 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

export const ButtonLogin = styled.button`
  color: #ffffff;
  background-color: #0a3950;
  border-radius: 15px;
  border: none;
  height: 38px;
  width: 150px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const ContainerTextBorda = styled.div`
  border-top: 1px solid #3c3b3b4d;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
export const PInscrevaSe = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
  margin-top: 15px;
  margin-bottom: 0;
`;
export const LinkInscrevaSe = styled.a`
  color: #5f98b4;
  text-decoration: none;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    color: #0d4766;
    text-decoration: underline;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin: 8px 0 0 0;
`;
