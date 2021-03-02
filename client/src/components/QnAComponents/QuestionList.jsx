import React from 'react';
import Item from './Item.jsx';

const QuestionList = (props) => (
  <div>
    <h1>QuestionList</h1>
    {props.items.map((item) => (<Item item={item} key={item.question_id} />))}
  </div>

);

export default QuestionList;
