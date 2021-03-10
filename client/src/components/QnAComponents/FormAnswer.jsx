import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormAContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  width: 60vw;
  height: 60vw;
  color: #424242;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 19px 38px #a0a0a0, 0 15px 12px #a0a0a0;
`;

const Input = styled.input`
font-family: 'Lato', sans-serif;
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
  font-family: 'Lato', sans-serif;  
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

const Title = styled.h4`
`;

const AddP = styled.button`
background-color: #FFFFFF;
border: 1px solid #424242;
height: 6vh;
width: 10vw;
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

const PhotoC = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PhotoI = styled.input`
font-family: 'Lato', sans-serif;
border: 1px solid #424242;
width: 20vw;
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

const BText = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #424242;
`;

class FormA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: [],
      photosI: '',
    };
    this.photoInput = '';
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.postMan = this.postMan.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handlePSubmit = this.handlePSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name !== 'photos') {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.name === 'Exit') {
      this.props.func();
    }
  }

  handlePChange(e) {
    this.setState({ photosI: e.target.value });
  }

  handlePSubmit(e) {
    e.preventDefault();
    if (
      this.state.photosI.includes('.png')
      || this.state.photosI.includes('.jpeg')
      || this.state.photosI.includes('.jpg')
      || this.state.photosI.includes('.gif')
    ) {
      this.state.photos.push(this.state.photosI);
      this.setState((prevState) => ({
        photosI: '',
        photos: prevState.photos,
      }));
    }
  }

  postMan(e) {
    e.preventDefault();
    if (this.state.email.includes('@') && this.state.email.includes('.com')) {
      delete this.state.photosI;
      axios.post(`/questions/${this.props.id}`, this.state)
        .catch((err) => { throw err; })
        .then((data) => {
          this.props.func(data.data);
        });
    }
  }

  render() {
    return (
      <FormAContainer>
        SUBMIT YOUR ANSWER
        <div>
          {this.props.name.toUpperCase()}
          {': '}
          {this.props.body.toUpperCase()}
        </div>

        <Pair>
          <Title>
            HOW CAN YOU HELP?
          </Title>
          <BodyT name="body" type="text" cols="55" rows="5" maxLength="1000" required onChange={this.handleChange} placeholder="HELP SOMEONE OUT HERE" value={this.state.body} />
        </Pair>
        <Pair>
          <Title>
            MAY I HAVE YOUR NAME?
          </Title>
          <Input name="name" onChange={this.handleChange} placeholder="ADD YOUR NAME HERE" value={this.state.name} />
          <BText>FOR PRIVACY REASONS, DO NOT USE YOUR FULL NAME OR EMAIL ADDRESS</BText>
        </Pair>
        <Pair>
          <Title>
            HOW ABOUT YOUR EMAIL?
          </Title>
          <Input name="email" onChange={this.handleChange} placeholder="EXAMPLE: jack@email.com" value={this.state.email} />
          <BText>FOR AUTHENTICATION REASONS, YOU WILL NOT BE EMAILED</BText>
        </Pair>
        <Pair>
          <Title>
            ADD A PHOTO
          </Title>
          <PhotoC>
            {this.state.photos.length < 5
              ? <PhotoI name="photos" onChange={this.handlePChange} placeholder="ADD URL" onSubmit={this.handlePSubmit} value={this.state.photosI} />
              : null}
            {this.state.photos.length < 5 ? (
              <AddP onClick={
              this.handlePSubmit
              }
              >
                ADD PHOTO
              </AddP>
            ) : null}
          </PhotoC>
          {this.state.photos.length < 5
            ? (
              <BText>
                {`YOU CAN ADD UP TO FIVE, YOU'VE ADDED (${this.state.photos.length}) SO FAR`}
              </BText>
            )
            : (
              <BText>
                YOU HAVE ADDED THE MAXIMUM AMOUNT (5) OF PHOTOS
              </BText>
            )}
        </Pair>
        <Buttons>
          <BP>
            <BC name="Submit" onClick={this.postMan}>SUBMIT</BC>
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
