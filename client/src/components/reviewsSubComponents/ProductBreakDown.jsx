import React from 'react';
import styled from 'styled-components';

const CharacBreakDownWrapper = styled.div`
  padding: 10px 5px;
`;

const FeedbackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function getRange(characteristic) {
  const smallLarge = ['Size', 'Width', 'Length'];
  const splRange = ['Too small', 'Perfect', 'Too large'];
  const pgRange = ['Poor', 'Great'];
  if (smallLarge.includes(characteristic)) {
    return splRange;
  }
  return pgRange;
}

const ProductBreakDown = ({ reviewsMeta }) => {
  const characteristics = Object.keys(reviewsMeta.characteristics);
  return (
    characteristics.map((characteristic) => {
      const ranges = getRange(characteristic);
      return (
        <CharacBreakDownWrapper key={reviewsMeta.characteristics[characteristic].id}>
          <div>{characteristic}</div>
          <div>BAR===========================</div>
          <FeedbackWrapper>
            { ranges.map((range) => (
              <span key={reviewsMeta.characteristics[characteristic].id
               + reviewsMeta.characteristics[characteristic].value + range}
              >
                {range}
              </span>
            ))}
          </FeedbackWrapper>
        </CharacBreakDownWrapper>
      );
    })
  );
};

export default ProductBreakDown;
