import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList.jsx';
import MoreA from './MoreA.jsx';

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 2vh 0;
  justify-content: space-between;
  `;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Helper = styled.div`
  display: flex;
  font-size: 15px;
  min-width: 220px;
  padding-left: 4vw;
  `;

const Yes = styled.u`
  padding: 0 2px 0 1vw;
`;

const AddAButton = styled.u`
  padding-left: 1vw;
`;

const Helpfulness = styled.div`
  padding-right: 1vw;
`;

const A = styled.div`
  font-size: 20px;
  padding-right: 1vw;
`;

const Q = styled.div`
 padding-right: 1vw;
`;

const QB = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState({});
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
        <TopWrapper>
          <QB>
            <Q>Q:</Q>
            {this.props.item.question_body}
          </QB>
          <Helper>
            <div>Helpful?</div>
            <Yes
              onClick={this.handleClick}
              onKeyPress={this.handleClick}
              role="button"
              tabIndex="0"
            >
              Yes
            </Yes>
            <Helpfulness>{`(${this.props.item.question_helpfulness})`}</Helpfulness>
            <div>|</div>
            <AddAButton
              onClick={this.handleClick}
              onKeyPress={this.handleClick}
              role="button"
              tabIndex="0"
            >
              Add Answer
            </AddAButton>
          </Helper>
        </TopWrapper>
        <BottomWrapper>
          <A>A:</A>
          <ListContainer>
            <AnswerList answers={this.state.dd} />
            <MoreA func={this.loadTwoItems} display={this.state.buttonDisplay} />
          </ListContainer>
        </BottomWrapper>
      </div>
    );
  }
}

export default Item;
