import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 800px;
  height: 100%;
  margin: 40px auto;
  transform: translate(-50%, -50%);
`;

// `
//   background-color: #424242;
//   opacity: 0.6;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 200;
//   width: 100%;
//   height: 100%;
//   margin: 40px auto;
// `;
class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        {/* <DarkLayer /> */}
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
