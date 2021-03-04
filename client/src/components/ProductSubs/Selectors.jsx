import React from 'react';
import styled from 'styled-components';

import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1vh;
  margin-left: 1vw;
  display: flex;
  flex-direction: row;
`;

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      available: null,
      quantity: null,
      maxQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
    this.resetThenSet = this.resetThenSet.bind(this);
  }

  resetThenSet(quantity, size) {
    if (arguments.length === 1) {
      this.setState({
        quantity: quantity,
      });
    } else {
      this.setState({
        size: [size],
        available: [quantity],
      });
    }
  }

  render() {
    const skus = Object.values(this.props.skus);
    return (
      <Wrapper>
        <SizeDropdown title="SELECT SIZE" list={skus} resetThenSet={this.resetThenSet} />
        <QuantityDropdown title="-" available={this.state.available} list={this.state.maxQuantity} resetThenSet={this.resetThenSet} />
      </Wrapper>
    );
  }
}

export default Selectors;
