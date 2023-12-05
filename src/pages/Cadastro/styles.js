import styled from "styled-components";
import UserIcon from "../../assets/user.png";
import EmailIcon from "../../assets/email.png";
import senhaIcon from "../../assets/senha.png";
import TelefoneIcon from "../../assets/telefone.png";

export const AppBody = styled.div`
  height: 100%;
  background-color: #0a3950;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 555px) {
    flex-direction: column;
  }
`;

export const SubContainerCadastro = styled.div`
  display: flex;
  background-color: #d9d9d9;
  border-radius: 15px;
  margin: 2em 4em;
  justify-content: space-around;
  max-width: 900px;

  @media (max-width: 555px) {
    flex-direction: column;
  }
`;

export const Main = styled.main``;

export const Anside = styled.aside`
  margin: 2em 4em 4em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 715px) {
    margin: 2em 1.5em 4em 0;
  }

  @media (max-width: 555px) {
    display: none;
  }
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
    padding: 0.8em 1.5em 4em 1.5em;
  }
`;

export const H2Cadastro = styled.h2`
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #3c3b3b4d;
  width: 100%;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcone = styled.div`
  width: 1.8em;
  height: 1.9em;
  background-image: url(${UserIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: 8px;
  margin-right: 5px;
`;

export const EmailIcone = styled(UserIcone)`
  background-image: url(${EmailIcon});
`;

export const PasswordIcone = styled(UserIcone)`
  background-image: url(${senhaIcon});
`;

export const TelIcone = styled(UserIcone)`
  background-image: url(${TelefoneIcon});
  top: 3px;
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

export const ContainerText = styled.div`
  border-top: 1px solid #3c3b3b4d;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const P = styled.p`
  margin: 15px 0 8px 0;
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
`;

export const LinkLogin = styled.a`
  color: #5f98b4;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #295971;
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
  --c: radial-gradient(farthest-side, #5F98B4 92%, #0000);
  background: 
    var(--c) 50% 0, 
    var(--c) 50% 100%, 
    var(--c) 100% 50%, 
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
    background: repeating-conic-gradient(#0000 0 35deg, #5F98B4 0 90deg);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 1px), #000 0);
    mask: radial-gradient(farthest-side, #0000 calc(100% - 1px), #000 0);
    border-radius: 50%;
  }

  @keyframes s8 { 
    100% { transform: rotate(.5turn) }
  }
`;

export const ButtonCadastro = styled.button`
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

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 555px) {
    width: 85%;
    padding-bottom: 15px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ImageLogo = styled.img`
  display: flex;
  max-width: 71%;
  margin-bottom: 0.5em;
`;

export const ContainerRecados = styled.div`
  width: 100%;
  max-width: 470px;
  background-color: #67818e;
  border-radius: 15px;
  margin-bottom: 1.5em;
  text-align: center;
  min-width: 150px;
`;

export const PCadastro = styled.p`
  margin: 1em;
  font-size: 20px;
  min-width: 145px;
`;

export const ContainerImgExib = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;
