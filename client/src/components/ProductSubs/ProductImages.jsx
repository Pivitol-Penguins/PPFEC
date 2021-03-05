import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import ViewerThumbnails from './ViewerThumbnails.jsx';

const Wrapper = styled.div`
  flex-basis: 65%;
  width: 50vw;
  display: flex;
  flex-direction: row;
  border: 2px solid #aeaeae;
`;

const RightArrow = styled.div`
  color: #e0e0e0;
  font-size: 1.75rem;
  z-index: 11;
  position: absolute;
  top: 30vh;
  right: 40.3vw;
  &:hover {
    color: #80ccc4;
    transform: scale(1.1);
  };
`;

const LeftArrow = styled.div`
  color: #e0e0e0;
  font-size: 1.75rem;
  z-index: 12;
  position: absolute;
  top: 30vh;
  left: 12.75vw;
  &:hover {
    color: #80ccc4;
    transform: scale(1.1);
  };
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  position: relative;
  z-index: 0;
`;

class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.clickNavHandler = this.clickNavHandler.bind(this);
    this.clickedThumb = this.clickedThumb.bind(this);
  }

  clickNavHandler(event) {
    const direction = Number(event.target.id);
    if (this.state.index + direction >= 0
      && this.state.index + direction < this.props.images.length) {
      this.setState((prevState) => ({ index: prevState.index += direction }));
    }
  }

  clickedThumb(index) {
    this.setState({ index: Number(index) });
  }

  render() {
    return (
      <Wrapper>
        <ViewerThumbnails start={this.state.start} end={this.state.end} images={this.props.images} clickedThumb={this.clickedThumb} id={this.props.id} alt="" />
        <RightArrow onClick={this.clickNavHandler}><FontAwesome id="1" name="angle-right" size="2x" /></RightArrow>
        <LeftArrow onClick={this.clickNavHandler}><FontAwesome id="-1" name="angle-left" size="2x" /></LeftArrow>
        <Image src={this.props.images[this.state.index].url} key={this.props.id} alt="style photograph" />
      </Wrapper>
    );
  }
}

export default ProductImages;
