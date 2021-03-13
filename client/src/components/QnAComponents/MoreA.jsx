import React from 'react';
import styled from 'styled-components';

const LoadMoreA = styled.div`
  padding: 2vh 0 2vh 0.3vw;
  font-weight: 700;
  color: #424242;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    color: #80CCC4;
  };
`;

class MoreA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.func();
  }

  render() {
    return (
      <div>
        {this.props.display ? <LoadMoreA type="submit" onClick={this.handleClick}>LOAD MORE ANSWERS</LoadMoreA> : null}
      </div>
    );
  }
}
export default MoreA;
