import React from 'react';
import Item from './Item.jsx';

const QuestionList = (props) => (
  <div>
    {props.items.map((item) => (<Item item={item} key={item.question_id} id={item.question_id} />))}
  </div>

);

export default QuestionList;
