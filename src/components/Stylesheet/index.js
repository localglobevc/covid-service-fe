import styled from 'styled-components';

const Text = styled.p`
  font-size: 1em;
  margin: 0;
  margin-bottom: 10px;
`;

const Title = styled(Text)`
  font-size: 2em;
`;

const Button = styled.button`
  min-height: 50px;
  min-width: 200px;
  ${props => props.fullwidth && 'width: 100%;'}
  padding: 0;
  margin-bottom: 10px;
  border: 3px solid;
  color: black;
  background-color: white;
  font-size: 1.2em;
  font-weight: bold;
  transition: 0.1s;
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const InvertedButton = styled(Button)`
  color: white;
  background-color: black;
  border-color: black;
`;

const Input = styled.input`
  min-height: 50px;
  min-width: 200px;
  margin-bottom: 10px;
  ${props => props.fullwidth && 'width: 100%;'}
  color: black;
  border: 3px solid;
  background-color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px 10px;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
`;

export {
  Title,
  Button,
  InvertedButton,
  Input
}
