import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormQContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  width: 50vw;
  height: 50vw;
  color: #424242;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 14px 28px #a0a0a0, 0 10px 10px #a0a0a0;
`;

const Input = styled.input`
font-family: 'Lato', sans-serif;  
font-weight: 700;
  border: 1px solid #424242;
  width: 30vw;
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

const BodyT = styled.textarea`
font-family: 'Lato', sans-serif;  
font-weight: 700;
border: 1px solid #424242;
width: 30vw;
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

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const BC = styled.button`
font-family: 'Lato', sans-serif;  
font-weight: 700;
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
    box-shadow: none;
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

const Title = styled.div`
`;

const BText = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: #424242;
`;

class FormQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      product_id: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.postMan = this.postMan.bind(this);
  }

  componentDidMount() {
    this.setState({ product_id: Number(window.location.pathname.slice(-6, -1)) });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.name === 'Exit') {
      this.props.func();
    }
  }

  postMan(e) {
    e.preventDefault();
    if (this.state.email.includes('@') && this.state.email.includes('.com')) {
      axios.post('/questions/', this.state)
        .catch()
        .then((data) => {
          this.props.func(data.data.results);
        });
    }
  }

  render() {
    return (
      <FormQContainer onSubmit={this.postMan}>
        ASK YOUR QUESTION
        {' '}
        {`ABOUT THE ${this.props.name.toUpperCase()}`}
        <Pair>
          <Title>
            HAVE A QUESTION?
          </Title>
          <BodyT cols="55" rows="5" maxLength="1000" name="body" onChange={this.handleChange} placeholder="ADD YOUR QUESTION HERE" value={this.state.body} />
        </Pair>
        <Pair>
          <Title>
            MAY I HAVE YOUR NAME?
          </Title>
          <Input name="name" onChange={this.handleChange} placeholder="EXAMPLE: jackson11!" value={this.state.name} />
          <BText>FOR PRIVACY REASONS, DO NOT USE YOUR FULL NAME OR EMAIL ADDRESS</BText>
        </Pair>
        <Pair>
          <Title>
            HOW ABOUT YOUR EMAIL?
          </Title>
          <Input name="email" type="email" onChange={this.handleChange} placeholder="WHY DID YOU LIKE THE PRODUCT OR NOT?" value={this.state.email} />
          <BText>FOR AUTHENTICATION REASONS, YOU WILL NOT BE EMAILED</BText>
        </Pair>
        <Buttons>
          <BP>
            <BC name="Submit" onClick={this.postMan}>SUBMIT</BC>
          </BP>
          <BP>
            <BC name="Exit" onClick={this.handleClick}>EXIT</BC>
          </BP>
        </Buttons>
      </FormQContainer>
    );
  }
}

export default FormQ;
