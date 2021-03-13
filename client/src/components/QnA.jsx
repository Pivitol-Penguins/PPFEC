import React from 'react';
import styled from 'styled-components';
import QuestionList from './QnAComponents/QuestionList.jsx';
import MoreQ from './QnAComponents/MoreQ.jsx';
import Search from './QnAComponents/Search.jsx';
import AddQ from './QnAComponents/AddQ.jsx';

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  margin: 0 auto;
  color: #424242;
  font-family: 'Lato', sans-serif;
  margin-bottom: 5vh;
`;

const QnATitle = styled.div`
  padding: 2vh 0;
  font-weight: 700;
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dd: [],
      max: 0,
      displayed: 0,
      buttonDisplay: true,
    };
    this.loadTwoItems = this.loadTwoItems.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.resetDefault = this.resetDefault.bind(this);
    this.addData = this.addData.bind(this);
  }

  componentDidMount() {
    this.setState({ data: this.props.questions.results }, () => {
      this.loadTwoItems();
    });
  }

  handleSearch(string) {
    this.setState({ dd: [] }, () => {
      const results = [];
      this.state.data.forEach((element, index) => {
        if (element.question_body.toLowerCase().includes(string.toLowerCase())) {
          const obj = {};
          Object.assign(obj, this.state.data[index]);
          obj.search = [
            element.question_body.slice(
              0, element.question_body.toLowerCase().indexOf(string.toLowerCase()),
            ),
            element.question_body.slice(
              element.question_body.toLowerCase().indexOf(
                string.toLowerCase(),
              ), element.question_body.toLowerCase().indexOf(string.toLowerCase()) + string.length,
            ),
            element.question_body.slice(
              element.question_body.toLowerCase().indexOf(
                string.toLowerCase(),
              ) + string.length, element.question_body.length,
            ),
          ];
          results.push(obj);
        }
        let count = 0;
        Object.entries(element.answers).forEach((answer) => {
          if (answer[1].body.toLowerCase().includes(string.toLowerCase())) {
            const obj = {};
            const highlightAnswer = {};
            Object.assign(obj, this.state.data[index]);
            Object.assign(highlightAnswer, answer[1]);
            obj.answers = { [answer[0]]: highlightAnswer };
            obj.answers[answer[0]].search = [
              highlightAnswer.body.slice(
                0, highlightAnswer.body.toLowerCase().indexOf(string.toLowerCase()),
              ),
              highlightAnswer.body.slice(
                highlightAnswer.body.toLowerCase().indexOf(
                  string.toLowerCase(),
                ), highlightAnswer.body.toLowerCase().indexOf(string.toLowerCase()) + string.length,
              ),
              highlightAnswer.body.slice(
                highlightAnswer.body.toLowerCase().indexOf(
                  string.toLowerCase(),
                ) + string.length, highlightAnswer.body.length,
              ),
            ];
            count += 1;
            obj.question_id += `a${count}`;
            results.push(obj);
          }
        });
      });
      this.setState({
        dd: results,
        buttonDisplay: false,
      });
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

  addData(data) {
    this.setState({ data }, () => (this.resetDefault()));
  }

  render() {
    return (
      <QnAContainer>
        <QnATitle>QUESTIONS & ANSWERS</QnATitle>
        <Search func={this.handleSearch} reset={this.resetDefault} />
        <QuestionList items={this.state.dd} name={this.props.name} />
        <BottomWrap>
          <MoreQ func={this.loadTwoItems} buttonDisplay={this.state.buttonDisplay} />
          <AddQ func={this.addData} name={this.props.name} />
        </BottomWrap>
      </QnAContainer>
    );
  }
}

export default QnA;
