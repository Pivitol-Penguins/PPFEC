import React from 'react';
import styled from 'styled-components';

const FormAContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  width: 50vw;
  height: 50vw;
  color: #424242;
  font-family: 'Lato', sans-serif;
`;

const Input = styled.input`
  border: 1px solid #424242;
  width: 30vw;
  z-index: 0;
  position: relative;
  padding: 1.5vh 2vw;
  &:focus {
    border: 1px solid #424242;
    outline: none;
  }; 
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const BC = styled.button`
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
};
&:focus {
  outline: none;
};
`;

const BP = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;
`;

const Pair = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h4`
`;

class FormA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // body: '',
      // name: '',
      // email: '',
      // question_id: '',
      // photo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({});
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.name === 'Exit') {
      this.props.func();
    }
  }

  render() {
    return (
      <FormAContainer>
        SHARE YOUR KNOWLEDGE
        <Pair>
          <Title>
            ADD AN ANSWER
          </Title>
          <Input name="body" onChange={this.handleChange} placeholder="HELP SOMEONE OUT HERE" />
        </Pair>
        <Pair>
          <Title>
            MAY I HAVE YOUR NAME?
          </Title>
          <Input name="name" onChange={this.handleChange} placeholder="ADD IT HERE" />
        </Pair>
        <Pair>
          <Title>
            HOW ABOUT YOUR EMAIL?
          </Title>
          <Input name="email" onChange={this.handleChange} placeholder="ADD IT HERE" />
        </Pair>
        <Pair>
          <Title>
            ADD A PHOTO
          </Title>
          <Input name="photo" onChange={this.handleChange} placeholder="ADD URL" />
        </Pair>
        <Buttons>
          <BP>
            <BC name="Submit" onClick={this.handleClick}>SUBMIT</BC>
          </BP>
          <BP>
            <BC name="Exit" onClick={this.handleClick}>EXIT</BC>
          </BP>
        </Buttons>
      </FormAContainer>
    );
  }
}

export default FormA;
