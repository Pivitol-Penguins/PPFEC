import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  // position: fixed;
  // top: 50%;
  // left: 50%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // z-index: 2000;
  // width: 800px;
  // height: 100%;
  // margin: 40px auto;
  // transform: translate(-50%, -50%);
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

// const DarkLayer = styled.div`
//   background-color: #424242;
//   opacity: 0.6;
//   position: absolute;
//   z-index: 200;
//   width: 100%;
//   height: 100%;
//   display: table;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     overflow: hidden;
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
