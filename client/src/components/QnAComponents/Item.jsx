import React from 'react';
import AnswerList from './AnswerList.jsx';
import MoreA from './MoreA.jsx'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      //answersId: [],
      dd: [],
      max: 0,
      displayed: 0,
      buttonDisplay: true,
    }
    this.loadTwoItems = this.loadTwoItems.bind(this);
  }


  componentDidMount () {
    // for(var key in this.props.item.answers) {
    //   this.state.answers.push(this.props.item.answers[key])
    // }

    Object.entries(this.props.item.answers).forEach((answer) => {
      this.state.answers.push(answer[1]); 
      //this.state.answersId.push([answer[0]])
    });
    this.setState({
      answers: this.state.answers,
      //answersId: this.state.answersId
    })
    this.loadTwoItems();
  }

  loadTwoItems() {
    this.state.max += 2;
    while (this.state.displayed < this.state.max) {
      if(!this.state.answers[this.state.displayed]){
        break;
      }
      this.state.dd.push(this.state.answers[this.state.displayed])
      this.state.displayed++;
    }
    if(!this.state.answers[this.state.displayed]) {
      this.state.buttonDisplay = false;
    }
    this.setState({
      dd: this.state.dd,
      displayed: this.state.displayed,
      max: this.state.max,
      buttonDisplay: this.state.buttonDisplay
    })
  }



  render () {
    
    return (
      <div>
      <h3>Q:{this.props.item.question_body}</h3>
      <div>{`Helpful? (${this.props.item.question_helpfulness})`}</div>
      <AnswerList answers={this.state.dd} />
      <MoreA func={this.loadTwoItems} display={this.state.buttonDisplay}/>
      </div>
    );
  }

}

export default Item;