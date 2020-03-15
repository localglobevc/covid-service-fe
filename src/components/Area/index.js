import React, {Component} from 'react';
import {
  useRouteMatch,
} from "react-router-dom";
import styled from 'styled-components';
import {Button, Input, Title, Text, Link} from '../Stylesheet';
import {GET} from '../../utils/api';
import data from '../../utils/data';

const AreaContainer = styled.div`
  width: 800px;
  max-width: 90vw;
  margin: 0 auto;
  padding: 40px 0;
`;

const OfferBox = styled.div`
  border: 3px solid black;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  min-height: 200px;
  box-sizing: border-box;
  float: left;
  position: relative;
  @media (min-width: 800px) {
    width: calc(50% - 10px);
    &:nth-child(off) {
      margin-right: 10px;
    }
    &:nth-child(even) {
      margin-left: 10px;
    }
  }
`;

const BottomLeft = styled.span`
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

const BottomRight = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

const Offer = ({title, description, provider}) => (
  <OfferBox>
    <Title>{title}</Title>
    <Text>{description}</Text>
    <BottomLeft><Link>Learn more</Link></BottomLeft>
    <BottomRight><Text>{provider}</Text></BottomRight>
  </OfferBox>
);

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

    const filteredData = data.filter(offer => offer.category === selectedCategory);

    return (
      <AreaContainer>
        <Title>Services available in {neighbourhood}, {postcode}</Title>
        <div style={{marginBottom: '10px'}}>
          {categories.map(category => (
            <Button inverted={selectedCategory === category} onClick={() => this.handleCategoryClick(category)}>{category}</Button>
          ))}
        </div>
        <div>
          {filteredData.map(({title, description, provider}) => (
            <Offer title={title} description={description} provider={provider}/>
          ))}
        </div>
      </AreaContainer>
    );
  }
}

export default Area;
