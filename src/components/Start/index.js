import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, InvertedButton, Input, Title, ErrorText} from '../Stylesheet';
import {GET} from '../../utils/api';

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
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      postcode: '',
      result: null,
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
  }

  handleSubmit() {
    const {
      postcode
    } = this.state;

    this.setState({
      loading: true
    })

    GET(`/geocode/${postcode}`)
      .then(result => {
        console.log(result)
      })
      .catch(e => {
        this.setState({error: e.message})
      })
  }

  handlePostcodeChange(e) {
    this.setState({
      postcode: e.target.value
    })
  }

  render() {
    const {
      postcode,
      loading,
      error
    } = this.state

    return (
      <VerticalCenter>
        <StartContainer>
          <Title>Discover services available in your area during the COVID-19 outbreak</Title>
          <Input placeholder="Enter your postcode..." onChange={this.handlePostcodeChange} value={postcode} fullwidth error={error && true}/>
          <InvertedButton fullwidth onClick={this.handleSubmit}>Continue</InvertedButton>
          <ErrorText center>{error}</ErrorText>
        </StartContainer>
      </VerticalCenter>
    );
  }
}

export default Start
