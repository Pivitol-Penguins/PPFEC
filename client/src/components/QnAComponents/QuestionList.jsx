import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const QList = styled.div`
  max-height: 70vh;
  overflow-y: scroll;
  margin-bottom: 2vh;
`;

const QuestionList = (props) => (
  <QList>
    {props.items.map((item) => (<Item item={item} key={item.question_id} id={item.question_id} />))}
  </QList>

);

export default QuestionList;
