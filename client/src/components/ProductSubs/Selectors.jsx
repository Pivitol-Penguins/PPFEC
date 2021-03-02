import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
`;

// const Form = styled.form`
//    width: 100%;
//    display: flex;
//    flex-direction: row;
// `;

const SizeSelector = styled.select`
  flex-basis: 60%;
  flex-grow: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  height: 5vh;
  padding: 0 1vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
`;

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
      size: 'SELECT SIZE',
      quantity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Wrapper>
        <SizeSelector name="size" value={this.state.size} onChange={this.handleChange}>
          <option value="SELECT SIZE">SELECT SIZE</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </SizeSelector>
        <QuantitySelector name="quantity" value={this.state.quantity} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </QuantitySelector>
      </Wrapper>
    );
  }
}

export default Selectors;
