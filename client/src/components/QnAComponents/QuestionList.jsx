import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const QList = styled.div`
  max-height: 70vh;
  overflow-y: scroll;
  margin-bottom: 2vh;
  ::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none;  
  -scrollbar-width: none;
`;

// /* Hide scrollbar for Chrome, Safari and Opera */
// .example::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .example {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }

const NoR = styled.div`
display: flex;
justify-content: center;
color: #424242;
font-family: 'Lato', sans-serif;
font-weight: 700;
`;

const QuestionList = (props) => (
  <QList>
    {props.items.length === 0 ? <NoR>NOTHING HERE...</NoR> : props.items.map((item) => (
      <Item
        item={item}
        key={item.question_id}
        id={item.question_id}
        name={props.name}
      />
    ))}
  </QList>
);

export default QuestionList;
