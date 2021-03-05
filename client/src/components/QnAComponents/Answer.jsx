import React from 'react';
import styled from 'styled-components';
import Photos from './Photos.jsx';

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 4vh;
  font-size: 13px;
  font-weight: 50;
  color: #aeaeae;
`;

const NameDate = styled.div`
  padding-right: 1vw;
`;

const Helpful = styled.div`
  padding: 0 1vw 0 1vw;
`;

const Yes = styled.div`
  padding: 0 2px 0 0;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    transform: scale(1.1);
  };
`;

const Help = styled.div`
  padding-right: 1vw;
`;

const Report = styled.div`
  padding-left: 1vw;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    transform: scale(1.1);
  };
`;

const Body = styled.div`
  padding-bottom: 2vh;
  font-size: 16px;
  color: #424242;
`;

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.dateTranslate = this.dateTranslate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.dateTranslate(this.props.answer.date);
  }

  handleClick() {
    this.setState({});
  }

  dateTranslate(date) {
    const months = ['Janurary', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.state.date = ` ${months[Number(date.slice(5, 7)) - 1]}, ${date.slice(8, 10)} ${date.slice(0, 4)}`;
    this.setState((preState) => ({
      date: preState.date,
    }));
  }

  render() {
    return (
      <div>
        <Body>
          {this.props.answer.body}
        </Body>
        <div>
          {this.props.answer.photos.length !== 0
            ? <Photos photos={this.props.answer.photos} /> : null}
        </div>
        <BottomContainer>
          <NameDate>
            {`By ${this.props.answer.answerer_name} on ${this.state.date}`}
          </NameDate>
          |
          <Helpful>
            Helpful?
          </Helpful>
          <Yes
            onClick={this.handleClick}
          >
            Yes
          </Yes>
          <Help>{`(${this.props.answer.helpfulness})`}</Help>
          |
          <Report
            onClick={this.handleClick}
          >
            Report
          </Report>
        </BottomContainer>
      </div>
    );
  }
}
export default Answer;
