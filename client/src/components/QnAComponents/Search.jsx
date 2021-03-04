import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  border-radius: 1px;
  border-color: black;
  width: 66vw;
  z-index: 0;
  position: relative;
  padding: 1.5vh 2vw;
  
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Magnify = styled.div`
  text-align: right;
  z-index: 50;
  position: relative;
  top: -5.5vh;
  left: 66vw;
  width: 1rem;
  padding-right: 4vw;
  color: black;
  -webkit-transform: rotate(-45deg); 
  -moz-transform: rotate(-45deg); 
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
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
        <Input value={this.state.input} onChange={this.handleChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <Magnify>⚲</Magnify>
      </Wrapper>
    );
  }
}
export default Search;
