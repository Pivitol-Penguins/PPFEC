import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import FormQ from './FormQuestion.jsx';

const AddAQ = styled.button`
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

const AQC = styled.div`
  padding: 1vh 2vw 1vh 2vw;
`;

class AddQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  handleClick() {
    this.setState({ modal: true });
  }

  exitModal(data) {
    this.setState({ modal: false }, () => {
      if (data) {
        this.props.func(data);
      }
    });
  }

  render() {
    return (
      <AQC>
        <AddAQ type="submit" onClick={this.handleClick}>ADD A QUESTION +</AddAQ>
        {this.state.modal ? (
          <Modal content={(
            <FormQ
              func={this.exitModal}
            />
          )}
          />
        ) : null}
      </AQC>
    );
  }
}

export default AddQ;
