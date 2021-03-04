import React from 'react';
import styled from 'styled-components';

const MoreAQ = styled.button`
  background-color: #FFFFFF;
  border: 1px 1px 1px 1px;
  border-color: #424242;
  height: 6vh;
  width: 20vw;
  font-size: 15px;
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
