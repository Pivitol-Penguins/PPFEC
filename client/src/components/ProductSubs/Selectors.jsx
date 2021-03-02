import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
`;

const SizeSelector = styled.select`
  flex-basis: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 15vw;
  height: 5vh;
  padding: 0 1vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
`;

const QuantitySelector = styled.select`
  flex-basis: 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 5vw;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
  margin-left: 1vw;
`;

const Selectors = ({ styles }) => {
  // console.log(styles);
  return (
    <Wrapper>
      <form>
        <SizeSelector>
          <option value="SELECT SIZE">SELECT SIZE</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </SizeSelector>
      </form>
      <QuantitySelector>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </QuantitySelector>
    </Wrapper>
  );
};

export default Selectors;
