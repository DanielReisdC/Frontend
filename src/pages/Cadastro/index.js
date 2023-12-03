import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import ImageExibicao from "../../assets/exibição.jpg";
import {
  AppBody,
  ContainerCadastro,
  SubContainerCadastro,
  Main,
  Form,
  H2Cadastro,
  Input,
  ContainerText,
  P,
  LinkLogin,
  ContainerLoginCom,
  ButtonCadastro,
  Anside,
  ContainerLogo,
  Link,
  ImageLogo,
  ContainerRecados,
  PCadastro,
  ContainerImgExib,
  Image,
  Container,
  UserIcone,
  EmailIcone,
  PasswordIcone,
  TelIcone,
  CustomLoader,
} from "./styles";

const App = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome_usuario: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  // Handler para alterações nos campos de input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler para alterações no campo de telefone com máscara
  const handlePhoneChange = (e) => {
    const value = phoneMask(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  // Função para aplicar máscara no número de telefone
  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const [isLoading, setIsLoading] = useState(false);

  // Handler para submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { nome_usuario, email, senha, confirmarSenha, telefone } = formData;
    const telefoneSemFormatacao = telefone.replace(/\D/g, "");

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      setFormErrors(["As senhas não coincidem."]);
      setIsLoading(false);
      return;
    }

    try {
      // Chamada para o backend para cadastrar usuário
      const response = await axios.post(
        "https://lifetidy.onrender.com/usuarios/cadastrar",
        {
          nome_usuario,
          email,
          senha,
          telefone: telefoneSemFormatacao,
        }
      );

      if (response.status === 201) {
        console.log("Usuário cadastrado com sucesso");
        navigate("/login");
      } else {
        console.error("Erro ao cadastrar o usuário");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.erros) {
        const erros = error.response.data.erros;
        setFormErrors(erros.map((error) => error.msg));
      } else {
        console.error("Erro ao cadastrar o usuário", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppBody>
      <ContainerCadastro>
        <SubContainerCadastro>
          <Main>
            <Form onSubmit={handleSubmit}>
              <H2Cadastro>CADASTRO</H2Cadastro>
              <Container>
                <UserIcone />
                <Input
                  type="text"
                  placeholder="NOME COMPLETO"
                  required
                  autoFocus
                  name="nome_usuario"
                  value={formData.nome_usuario}
                  onChange={handleChange}
                  maxLength={40}
                />
              </Container>
              <Container>
                <EmailIcone />
                <Input
                  type="email"
                  placeholder="E-MAIL"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={40}
                />
              </Container>
              <Container>
                <PasswordIcone />
                <Input
                  type="password"
                  placeholder="SENHA"
                  required
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  maxLength={30}
                />
              </Container>
              <Container>
                <PasswordIcone />
                <Input
                  type="password"
                  placeholder="CONFIRME SUA SENHA"
                  required
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  maxLength={30}
                />
              </Container>
              <Container>
                <TelIcone />
                <Input
                  $lastinput={true}
                  type="tel"
                  placeholder="TELEFONE"
                  required
                  name="telefone"
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                />
              </Container>

              {formErrors.length > 0 && (
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: 0}}>Erros encontrados:</p>
                  <ul style={{ listStyleType: "none", paddingLeft: 0, marginBottom: 0 }}>
                    {formErrors.map((error, index) => (
                      <li key={index} style={{ color: "red" }}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ContainerText>
                <P>JÁ POSSUI CADASTRO?</P>
                <LinkLogin onClick={() => navigate("/login")}>Login!</LinkLogin>
              </ContainerText>
              <ContainerLoginCom>
                {isLoading && <CustomLoader />}
                <ButtonCadastro type="submit" disabled={isLoading}>
                  CADASTRAR
                </ButtonCadastro>
              </ContainerLoginCom>
            </Form>
          </Main>
          <Anside>
            <ContainerLogo>
              <Link onClick={() => navigate("/")}>
                <ImageLogo src={logo} alt={"Logo-LifeTidy"} />
              </Link>
            </ContainerLogo>
            <ContainerRecados>
              <PCadastro>
                Viva de forma organizada, torne o seu dia a dia mais produtivo.
              </PCadastro>
              <PCadastro>
                A organização é a chave para a produtividade.
              </PCadastro>
            </ContainerRecados>
            <ContainerImgExib>
              <Image src={ImageExibicao} alt="Img-exibição" />
            </ContainerImgExib>
          </Anside>
        </SubContainerCadastro>
      </ContainerCadastro>
    </AppBody>
  );
};

export default App;
