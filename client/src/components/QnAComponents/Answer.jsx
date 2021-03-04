import React from 'react';
import styled from 'styled-components';
import Photos from './Photos.jsx';

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1vh;
  font-size: 13px;
`;

const NameDate = styled.div`
  padding-right: 1vw;
`;

const Helpful = styled.div`
  padding: 0 1vw 0 1vw;
`;

const Yes = styled.u`
  padding: 0 2px 0 0;
`;

const Help = styled.div`
  padding-right: 1vw;
`;

const Report = styled.u`
  padding-left: 1vw;
`;

const Body = styled.div`
  padding-bottom: 1vh;
  font-size: 16px;
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
            {`By ${this.props.answer.answerer_name}, ${this.state.date}`}
          </NameDate>
          |
          <Helpful>
            Helpful?
          </Helpful>
          <Yes
            onClick={this.handleClick}
            onKeyPress={this.handleClick}
            role="button"
            tabIndex="0"
          >
            Yes
          </Yes>
          <Help>{`(${this.props.answer.helpfulness})`}</Help>
          |
          <Report
            onClick={this.handleClick}
            onKeyPress={this.handleClick}
            role="button"
            tabIndex="0"
          >
            Report
          </Report>
        </BottomContainer>
      </div>
    );
  }
}
export default Answer;
