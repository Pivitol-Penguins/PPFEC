import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #424242;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  width: 60vw;
  z-index: 0;
  position: relative;
  padding: 1.5vh 2vw;
  &:focus {
    border: 1px solid #80CCC4;
    outline: none;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:hover {
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
`;

const Wrapper = styled.label`
  width: 100%;
`;

const Magnify = styled.div`
  text-align: right;
  font-weight: 700;
  z-index: 50;
  position: relative;
  bottom: 5.5vh;
  left: 60vw;
  width: 1rem;
  padding-right: 4vw;
  color: #424242;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  &:hover {
    cursor: pointer;
    color: #80CCC4;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value }, () => {
      if (this.state.input.length > 2) {
        this.props.func(this.state.input);
      } else {
        this.props.reset();
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Input value={this.state.input} onChange={this.handleChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." type="text" />
        <Magnify>⚲</Magnify>
      </Wrapper>
    );
  }
}
export default Search;
