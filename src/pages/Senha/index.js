import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  AppBody,
  ContainerCadastro,
  ContainerCadastroPai,
  Main,
  Form,
  H2Cadastro,
  InputEmail,
  InputEmailRecuperacao,
  ContainerInput,
  ContainerText,
  ContainerRecuperar,
  ButtonRecuperar,
  ContainerRecuperacao,
  ContainerLogo,
  ImageLogo,
  Link,
} from "./styles";

const App = () => {
  const navigate = useNavigate();

  return (
    <AppBody>
      <ContainerCadastroPai>
        <ContainerCadastro>
          <Main>
            <Form>
              <H2Cadastro>RECUPERAR SENHA</H2Cadastro>
              <ContainerInput>
                <InputEmail
                  type="email"
                  placeholder="DIGITE O E-MAIL CADASTRADO"
                  required
                />
                <InputEmailRecuperacao
                  type="email"
                  placeholder="CONFIRME SEU E-MAIL"
                  required
                />
              </ContainerInput>
              <ContainerText></ContainerText>
              <ContainerRecuperar>
                <ButtonRecuperar>RECUPERAR</ButtonRecuperar>
              </ContainerRecuperar>
            </Form>
          </Main>
          <ContainerRecuperacao>
            <ContainerLogo>
              <Link onClick={() => navigate("/")}>
                <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
              </Link>
            </ContainerLogo>
          </ContainerRecuperacao>
        </ContainerCadastro>
      </ContainerCadastroPai>
    </AppBody>
  );
};

export default App;