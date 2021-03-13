import React from 'react';
import styled from 'styled-components';
import ExpandedImage from './ExpandedImage.jsx';

const PhotoThumbnail = styled.img`
  height: 10vh;
  weight: 10vw;
  margin: 0 1vw 1vh 0;
  border: 1px solid #424242;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  }

  render() {
    return (
      <div>
        <PhotoThumbnail src={this.props.src} alt={this.props.alt} onClick={this.handleClick} />
        { this.state.isModalOpen && (
        <ModalBackground onClick={this.handleClick}>
          <ExpandedImage src={this.props.src} alt={this.props.alt} func={this.handleClick} />
        </ModalBackground>
        )}
      </div>
    );
  }
}

export default Photo;
