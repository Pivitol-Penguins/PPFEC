import React from 'react';
import QuestionList from './QnAComponents/QuestionList.jsx';
import MoreQ from './QnAComponents/MoreQ.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.questions.results,
      dd: [],
      max: 0,
      displayed: 0,
      buttonDisplay: true,
    };
    this.loadTwoItems = this.loadTwoItems.bind(this);
  }

  componentDidMount() {
    this.loadTwoItems();
  }

  loadTwoItems() {
    this.state.max += 2;
    while (this.state.displayed < this.state.max) {
      if (!this.state.data[this.state.displayed]) {
        break;
      }
      this.state.dd.push(this.state.data[this.state.displayed]);
      this.state.displayed += 1;
    }
    if (!this.state.data[this.state.displayed]) {
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
        <h1>QnA</h1>
        <QuestionList items={this.state.dd} />
        <MoreQ func={this.loadTwoItems} buttonDisplay={this.state.buttonDisplay} />
      </div>
    );
  }
}

export default QnA;
