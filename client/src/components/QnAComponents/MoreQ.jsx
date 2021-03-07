import React from 'react';
import styled from 'styled-components';

const MoreAQ = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 20vw;
  font-size: 15px;
  color: #424242;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:focus {
    outline: none;
  };
`;

const MQC = styled.div`
padding: 1vh 0 1vh 0;
`;

class MoreQ extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.func();
  }

  render() {
    return (
      <MQC>
        {this.props.buttonDisplay
          ? <MoreAQ type="submit" onClick={this.handleClick}>MORE ANSWERED QUESTIONS</MoreAQ> : null}
      </MQC>
    );
  }
}

export default MoreQ;
