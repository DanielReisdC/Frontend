import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

export const CustomModal = styled(Modal)`
`;

export const Container = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #fff;;
  border-radius: 15px;
  padding: 2em 4em 4em 4em;
  align-items: center;
`;

export const SubContainerLogo = styled.div``;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  cursor: pointer;
  color: #3C3B3B;
  position: relative;
  left: 1.5em;
  bottom: 0.8em;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  max-width: none;
  padding-bottom: 20px;
  display: flex;
`;

export const ImageLogo = styled.img`
  width: 32%;
  display: flex;
`;

export const Line = styled.div`
  border-bottom: 1px solid #3c3b3b4d;
  width: 100%;
`;

export const H2Text = styled.h2`
  max-width: 252px;
  font-weight: bold;
  font-size: 23px;
  margin: 50px 0 10px 0;
  text-align: center;
`;

export const ContainerCustomLoader = styled.div`
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
`

export const CustomLoader = styled.div`
  width: 40px;
  height: 40px;
  --c: radial-gradient(farthest-side, #5F98B4 92%, #0000);
  background: 
    var(--c) 50% 0, 
    var(--c) 50% 100%, 
    var(--c) 100% 50%, 
    var(--c) 0 50%;
  background-size: 8px 8px;
  background-repeat: no-repeat;
  animation: s8 0.6s linear infinite;
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

export const ContainerButtons = styled.div`
  justify-content: space-evenly;
  padding-top: 15px;
  border-top: 1px solid #3c3b3b4d;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Buttons = styled.button`
  height: 2.5em;
  width: 7em;
  border: none;
  border-radius: 25px;
  background-color: #0a3950;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: 1.5s ease;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: #2f6f8e;
  }
  &:last-of-type {
    color: #000;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #9e9e9e;
    }
  }
`;
