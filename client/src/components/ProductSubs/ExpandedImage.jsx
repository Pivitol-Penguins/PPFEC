import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Expanded = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 5;
  max-width: 85vw;
  max-height: 90vh;
  margin: auto;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  &:hover { cursor: crosshair; };
`;

class ExpandedImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.imageClickHandler = this.imageClickHandler.bind(this);
  }

  imageClickHandler(event) {
    event.stopPropagation();
  }

  render() {
    return ReactDOM.createPortal(
      <Expanded
        key={this.props.id}
        src={this.props.src}
        alt={this.props.alt}
        onMouseDown={(event) => this.imageClickHandler(event)}
      />,
      document.getElementById('modal-root'),
    );
  }
}

export default ExpandedImage;
