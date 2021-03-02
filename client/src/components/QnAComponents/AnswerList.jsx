import React from 'react';
import Answer from './Answer.jsx'

var AnswerList = (props) => {
  return (
      <div>
        {props.answers.map((answer)=>(<Answer answer={answer} key={answer.id}/>))}
      </div>
  )
}
export default AnswerList;