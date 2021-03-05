import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList.jsx';
import MoreA from './MoreA.jsx';
import Modal from './Modal.jsx';
import FormA from './FormAnswer.jsx';

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 2vh 0;
  justify-content: space-between;
  align-items: center;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Helper = styled.div`
  display: flex;
  font-size: 15px;
  min-width: 245px;
  padding-left: 4vw;
  color: #424242;
`;

const Yes = styled.div`
  padding: 0 2px 0 1vw;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    transform: scale(1.1);
  };
`;

const AddAButton = styled.div`
  padding-left: 1vw;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    transform: scale(1.1);
  };
`;

const Helpfulness = styled.div`
  padding-right: 1vw;
`;

const A = styled.div`
  font-size: 20px;
  padding-right: 1vw;
  font-weight: 700;
  color: #424242;
`;

const Q = styled.div`
  font-weight: 700;
  padding-right: 1vw;
  color: #424242;
`;

const QB = styled.h4`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 1.3rem;
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
      modal: false,
    };
    this.loadTwoItems = this.loadTwoItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.exitModal = this.exitModal.bind(this);
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
    this.setState({ modal: true });
  }

  exitModal() {
    this.setState({ modal: false });
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
            >
              Yes
            </Yes>
            {this.state.modal ? (
              <Modal content={(
                <FormA
                  func={this.exitModal}
                />
              )}
              />
            ) : null}
            <Helpfulness>{`(${this.props.item.question_helpfulness})`}</Helpfulness>
            <div>|</div>
            <AddAButton
              onClick={this.handleClick}
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
