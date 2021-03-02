import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
`;

const Selectors = ({ styles }) => {
  // console.log(styles);
  return (
    <Wrapper>
      <button>Select Size</button>
      <button>Select Quantity</button>
    </Wrapper>
  );
};

export default Selectors;
