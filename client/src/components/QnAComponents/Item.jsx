import React from 'react';
import AnswerList from './AnswerList.jsx';
import MoreA from './MoreA.jsx';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],

      dd: [],
      max: 0,
      displayed: 0,
      buttonDisplay: true,
    };
    this.loadTwoItems = this.loadTwoItems.bind(this);
  }

  componentDidMount() {
    Object.entries(this.props.item.answers).forEach((answer) => {
      this.state.answers.push(answer[1]);
    });
    this.setState((prevState) => ({
      answers: prevState.answers,

    }));
    this.loadTwoItems();
  }

  loadTwoItems() {
    this.state.max += 2;
    while (this.state.displayed < this.state.max) {
      if (!this.state.answers[this.state.displayed]) {
        break;
      }
      this.state.dd.push(this.state.answers[this.state.displayed]);
      this.state.displayed += 1;
    }
    if (!this.state.answers[this.state.displayed]) {
      this.state.buttonDisplay = false;
    }
    this.setState((prevState) => ({
      dd: prevState.dd,
      displayed: prevState.displayed,
      max: prevState.max,
      buttonDisplay: prevState.buttonDisplay,
    }));
  }

  render() {
    return (
      <div>
        <h3>
          Q:
          {this.props.item.question_body}
        </h3>
        <div>{`Helpful? (${this.props.item.question_helpfulness})`}</div>
        <AnswerList answers={this.state.dd} />
        <MoreA func={this.loadTwoItems} display={this.state.buttonDisplay} />
      </div>
    );
  }
}

export default Item;
