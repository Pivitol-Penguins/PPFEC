import React from 'react';
import QuestionList from './QnAComponents/QuestionList.jsx';
import MoreQ from './QnAComponents/MoreQ.jsx';
import Search from './QnAComponents/Search.jsx';

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
    this.handleSearch = this.handleSearch.bind(this);
    this.resetDefault = this.resetDefault.bind(this);
  }

  componentDidMount() {
    this.loadTwoItems();
  }

  handleSearch(string) {
    this.setState({ dd: [] });
    const results = [];
    this.state.data.forEach((element, index) => {
      if (element.question_body.includes(string)) {
        results.push(this.state.data[index]);
      }
      Object.entries(element.answers).forEach((answer) => {
        if (answer[1].body.includes(string)) {
          const obj = {};
          Object.assign(obj, this.state.data[index]);
          obj.answers = { [answer[0]]: answer[1] };
          results.push(obj);
        }
      });
    });
    this.setState({
      dd: results,
      buttonDisplay: false,
    });
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

  resetDefault() {
    this.setState({
      dd: [],
      max: 0,
      displayed: 0,
      buttonDisplay: true,
    }, () => (this.loadTwoItems()));
  }

  render() {
    return (
      <div>
        <h1>QnA</h1>
        <Search func={this.handleSearch} reset={this.resetDefault} />
        <QuestionList items={this.state.dd} />
        <MoreQ func={this.loadTwoItems} buttonDisplay={this.state.buttonDisplay} />
      </div>
    );
  }
}

export default QnA;
