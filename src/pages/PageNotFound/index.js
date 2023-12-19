import React from 'react';
import ImageError from '../../assets/image404.png'

import {
  Container, ImageDeError, ErrorText, ErrorMessage, BackButton
} from "./styles";

const NotFound = () => {
  return (
    <Container>
      <ImageDeError
                  src={ImageError}
                  alt="Imagem-error"
                />
      <ErrorText> 404</ErrorText>
      <ErrorMessage> <strong>Desculpe! </strong>Página não encontrada</ErrorMessage>
      <BackButton href="/">Voltar para a página inicial</BackButton>
    </Container>
  );
};

export default NotFound;
