import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = (props) => (
  <div>

    {props.answers.map((answer) => (<Answer answer={answer} key={answer.id} id={answer.id} />))}

  </div>
);

export default AnswerList;
