import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 210;
  max-width: 70vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const DarkLayer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 4;
background-color: #42424275;
`;

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <DarkLayer />
        <StyledModal>
          <div>
            {this.props.content}
          </div>
        </StyledModal>
      </div>,
      document.getElementById('modal-root') || document.createElement('div'),
    );
  }
}

export default Modal;
