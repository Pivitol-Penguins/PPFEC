import React from 'react';
import styled from 'styled-components';

import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
`;

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      prevSize: null,
      available: null,
      quantity: null,
      isSizeSelected: false,
      maxQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
    this.resetThenSet = this.resetThenSet.bind(this);
    this.sizeChangeChecker = this.sizeChangeChecker.bind(this);
  }

  resetThenSet(quantity, size) {
    if (arguments.length === 1) {
      this.setState({
        quantity,
      });
    } else {
      this.setState((prevState) => ({
        prevSize: prevState.size,
        size,
        available: quantity,
        isSizeSelected: !prevState.isSizeSelected,
        headerQuantity: 1,
      }), () => this.sizeChangeChecker());
    }
  }

  sizeChangeChecker() {
    if (this.state.prevSize !== this.state.size) {
      this.setState({ isSizeSelected: true });
    } else {
      this.setState((prevState) => ({ isSizeSelected: true, headerQuantity: prevState.quantity }));
    }
  }

  render() {
    const skus = Object.values(this.props.skus);
    return (
      <Wrapper>
        <SizeDropdown title="SELECT SIZE" list={skus} resetThenSet={this.resetThenSet} />
        {!this.state.isSizeSelected
        && <QuantityDropdown title="–" available={this.state.available} list={this.state.maxQuantity} resetThenSet={this.resetThenSet} /> }
        {this.state.isSizeSelected
        && (
        <QuantityDropdown
          title={this.state.headerQuantity}
          available={this.state.available}
          list={this.state.maxQuantity}
          resetThenSet={this.resetThenSet}
        />
        )}
      </Wrapper>
    );
  }
}

export default Selectors;
