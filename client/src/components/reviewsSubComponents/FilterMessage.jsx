import React from 'react';
import styled from 'styled-components';

const ClickTag = styled.div`
  padding: 2px 1vw 0 1vw;
  text-decoration:underline;

  &.not-click {
    &:hover {
      cursor: pointer;
      color: #80CCC4;
      transform: scale(1.1);
    }
  }
`;

// const FilterMessage = (props) => {
//   return (

//     <div>
//       <span>Showing</span>
//       {prpos.filter.map((star) => (
//         <span>{star} stars reviews</span>
//       ))}
//     </div>
//     <ClickTag>
//       Remove All Filters
//     </ClickTag>
//   )
// }

export default FilterMessage;
