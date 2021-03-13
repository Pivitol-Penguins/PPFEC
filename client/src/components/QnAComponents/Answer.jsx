import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Photos from './Photos.jsx';

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 4vh;
  font-size: 13px;
  font-weight: 300;
  color: #424242;
`;

const NameDate = styled.div`
  padding-right: 1vw;
  display: flex;
`;

const Seller = styled.div`
  font-weight: 700;
  margin-right: .2vw;
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
  display: flex;
  justify-content: left;
  padding-top: 2px;
  padding-bottom: 1.75vh;
  font-size: 16px;
  font-weight: 400;
  color: #424242;
`;

const Highlight = styled.div`
  background: #80ccc4;
  color: #FFFFFF;
`;

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      sentH: false,
      reported: false,
      report: 'Report',
    };
    this.dateTranslate = this.dateTranslate.bind(this);
    this.handleYes = this.handleYes.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  componentDidMount() {
    this.dateTranslate(this.props.answer.date);
  }

  handleYes() {
    if (!this.state.sentH) {
      this.props.answer.helpfulness += 1;
      this.setState({ sentH: true });
      axios.put(`/a/questions/${this.props.id}`);
    }
  }

  handleReport() {
    if (!this.state.reported) {
      axios.put(`/r/questions/${this.props.id}`);
      this.setState({
        reported: true,
        report: 'Reported',
      });
    }
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
          {this.props.answer.search
            ? this.props.answer.search[0]
            : null}
          {this.props.answer.search && this.props.answer.search[0][this.props.answer.search[0].length - 1] === ' '
            ? <div>&nbsp;</div>
            : null}
          {this.props.answer.search
            ? <Highlight>{this.props.answer.search[1]}</Highlight>
            : this.props.answer.body}
          {this.props.answer.search
            && (this.props.answer.search[2][0] === ' '
              || this.props.answer.search[1][this.props.answer.search[1].length - 1] === ' ')
            ? <div>&nbsp;</div>
            : null}
          {this.props.answer.search
            ? this.props.answer.search[2]
            : null}
        </Body>
        <div>
          {this.props.answer.photos
            ? <Photos photos={this.props.answer.photos} /> : null}
        </div>
        <BottomContainer>
          { this.props.answer.answerer_name === 'Seller'
            ? (
              <NameDate>
                <Seller>SELLER</Seller>
                <div>{`on ${this.state.date}`}</div>
              </NameDate>
            )
            : (
              <NameDate>
                {`By ${this.props.answer.answerer_name} on ${this.state.date}`}
              </NameDate>
            )}
          |
          <Helpful>
            Helpful?
          </Helpful>
          <Yes
            onClick={this.handleYes}
          >
            Yes
          </Yes>
          <Help>{`(${this.props.answer.helpfulness})`}</Help>
          |
          <Report
            onClick={this.handleReport}
          >
            {this.state.report}
          </Report>
        </BottomContainer>
      </div>
    );
  }
}
export default Answer;
