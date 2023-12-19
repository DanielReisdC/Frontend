import styled from 'styled-components';

export const ImageDeError = styled.img`
border-radius: 75px;
width: 200px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0a3950;
  padding: 10px;
`;

export const ErrorText = styled.h1`
  font-size: 4rem;
  margin-bottom: 15px;
  color: #FFF;
  text-shadow: 8px 10px 5px rgba(0, 0, 0, 0.3);
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #FFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`;


export const BackButton = styled.a`
  padding: 10px 15px;
    border: none;
    border-radius: 25px;
    background-color: #FFF;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 1.5s ease 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    text-decoration: none;

  &:hover {
    background-color:  #898989;
  }
`;