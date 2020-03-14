import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, InvertedButton, Input, Title} from '../Stylesheet';

const StartContainer = styled.div`
  width: 400px;
  max-width: 90vw;
  margin: 0 auto;
`;

const VerticalCenter = ({children}) => (
  <div style={{display: 'table', height: '100%', width: '100%'}}>
    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
      {children}
    </div>
  </div>
);

class Start extends Component {
  render() {
    return (
      <VerticalCenter>
        <StartContainer>
          <Title>Discover services available in your area during the COVID-19 outbreak</Title>
          <Input placeholder="Enter your postcode..." fullwidth/>
          <InvertedButton fullwidth>Continue</InvertedButton>
        </StartContainer>
      </VerticalCenter>
    );
  }
}

export default Start
