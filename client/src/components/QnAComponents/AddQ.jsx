import React from 'react';
import styled from 'styled-components';

const AddAQ = styled.button`
  background-color: #FFFFFF;
  border: 1px 1px 1px 1px;
  border-color: #424242;
  height: 6vh;
  width: 20vw;
  font-size: 15px;
`;

const AQC = styled.div`
padding: 1vh 2vw 1vh 2vw;
`;

class AddQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <AQC>
        <AddAQ type="submit">ADD A QUESTION +</AddAQ>
      </AQC>
    );
  }
}

export default AddQ;
