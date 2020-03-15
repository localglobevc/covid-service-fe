import React, {Component} from 'react';
import {
  useRouteMatch,
} from "react-router-dom";
import styled from 'styled-components';
import {Button, Input, Title, ErrorText} from '../Stylesheet';
import {GET} from '../../utils/api';

const AreaContainer = styled.div`
  width: 800px;
  max-width: 90vw;
  margin: 0 auto;
  padding-top: 40px;
`;


class Area extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: 'Food',
      neighbourhood: '',
      postcode: ''
    }

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    const {
      postcode
    } = this.props.match.params;

    GET(`/geocode/${postcode}`)
      .then(result => {
        this.setState({
          neighbourhood: result.neighbourhood,
          postcode: result.postcode
        })
      })
      .catch(e => {
        this.setState({error: e.message})
      })
  }

  handleCategoryClick(selectedCategory) {
    this.setState({selectedCategory})
  }

  render() {
    const {
      selectedCategory,
      neighbourhood,
      postcode,
    } = this.state;

    const categories = [
      'Food',
      'Health',
      'Business',
      'Entertainment',
      'Community'
    ]

    return (
      <AreaContainer>
        <Title>Services available in {neighbourhood}, {postcode}</Title>
        <div>
          {categories.map(category => (
            <Button inverted={selectedCategory === category} onClick={() => this.handleCategoryClick(category)}>{category}</Button>
          ))}
        </div>
      </AreaContainer>
    );
  }
}

export default Area;
