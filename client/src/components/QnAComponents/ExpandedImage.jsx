import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 70vw;
  max-height: 60vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Expanded = styled.img`
  display: block;
  max-height: 60vh;
`;

const ExpandedImage = (props) => ReactDOM.createPortal(
  <Wrapper>
    <Expanded
      key={props.id}
      src={props.src}
      alt={props.alt}
      onMouseDown={props.func}
    />
  </Wrapper>,
  document.getElementById('modal-root') || document.createElement('div'), // for testing purposes,
);

export default ExpandedImage;
