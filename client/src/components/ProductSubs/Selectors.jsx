import React from 'react';
import styled from 'styled-components';

import SizeDropdown from './SizeDropdown.jsx';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1vh;
  margin-left: 1vw;
  display: flex;
  flex-direction: row;
`;

// const SizeSelector = styled.select`
//   flex-basis: 60%;
//   flex-grow: 3;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: no-wrap;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: bold;
//   height: 5vh;
//   padding: 0 1vw;
//   background: none;
//   border: 1px solid #424242;
//   color: #424242;
// `;

const QuantitySelector = styled.select`
  flex-basis: 60%;
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
  margin-left: 1vw;
`;

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      available: null,
      quantity: 1,
      maxQuantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetThenSet = this.resetThenSet.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'size') {
      const value = JSON.parse(event.target.value);
      this.setState({
        size: value.size,
        available: value.quantity,
      });
    } else {
      this.setState({
        quantity: event.target.value,
      });
    }
  }

  resetThenSet(size, quantity) {
    this.setState({
      size: [size],
      available: [quantity],
    });
  }

  render() {
    const skus = Object.values(this.props.skus);
    return (
      <Wrapper>
        <SizeDropdown title="SELECT SIZE" list={skus} resetThenSet={this.resetThenSet} />
        <QuantitySelector label="Choose quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange}>
          <option value="-">-</option>
          { this.state.maxQuantity.map((quantity) => {
            if (quantity < this.state.available) {
              return <option value={quantity} key={quantity}>{quantity}</option>;
            }
          })}
        </QuantitySelector>
      </Wrapper>
    );
  }
}

export default Selectors;
