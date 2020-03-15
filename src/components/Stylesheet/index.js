import styled from 'styled-components';

const Text = styled.p`
  font-size: 1em;
  margin: 0;
  margin-bottom: 10px;
  ${props => props.center && 'text-align: center;'}
`;

const ErrorText = styled(Text)`
  color: red;
`;

const Title = styled(Text)`
  font-size: 2em;
`;

const Link = styled(Text)`
  color: #0a82d1;
`;

const Button = styled.button`
  min-height: 50px;
  min-width: 100px;
  ${props => props.fullwidth ? 'width: 100%;' : 'margin-right: 10px;' }
  padding: 0 10px;
  margin-bottom: 10px;
  border: 3px solid;
  color: black;
  background-color: white;
  font-size: 1.2em;
  font-weight: bold;
  transition: 0.1s;
  ${props => props.inverted && 'color: white; background-color: black; border-color: black;'}
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  &:active {
    opacity: 1;
    cursor: pointer;
  }
`;

const Input = styled.input`
  min-height: 50px;
  min-width: 200px;
  margin-bottom: 10px;
  ${props => props.fullwidth && 'width: 100%;'}
  color: black;
  border: 3px solid;
  ${props => props.error && 'border-color: red;'}
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
  Text,
  ErrorText,
  Title,
  Button,
  Input,
  Link
}
