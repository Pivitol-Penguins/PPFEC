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
      start: 0,
      end: 4,
    };
    this.clickNavHandler = this.clickNavHandler.bind(this);
    this.clickedThumb = this.clickedThumb.bind(this);
    this.indexUpdater = this.indexUpdater.bind(this);
    this.indexChecker = this.indexChecker.bind(this);
  }

  clickNavHandler(event) {
    const direction = Number(event.target.id);
    if (this.state.index + direction >= 0
      && this.state.index + direction < this.props.images.length) {
      this.setState((prevState) => ({ index: prevState.index + direction }),
        () => this.indexChecker());
    }
  }

  clickedThumb(index) {
    this.setState({ index: Number(index) });
  }

  indexUpdater(amount) {
    if (this.state.start + amount >= 0
      && this.state.end + amount < this.props.images.length) {
      this.setState((prevState) => ({
        start: prevState.start + amount,
        end: prevState.end + amount,
      }));
    }
  }

  indexChecker() {
    if (this.state.index < 5) {
      this.setState({
        start: 0,
        end: 4,
      });
    } else if (this.props.images.length - this.state.index <= 5) {
      this.setState({
        start: this.props.images.length - 5,
        end: this.props.images.length - 1,
      });
    } else if (this.state.index < this.state.start) {
      this.setState((prevState) => ({
        start: prevState.index,
        end: prevState.index + 4,
      }));
    } else if (this.state.index > this.state.end) {
      this.setState((prevState) => ({
        start: prevState.index - 4,
        end: prevState.index + 1,
      }));
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.index !== 0 && <LeftArrow onClick={this.clickNavHandler}><FontAwesome id="-1" name="angle-left" size="2x" /></LeftArrow> }
        <ViewerThumbnails viewerIndex={this.state.index} start={this.state.start} end={this.state.end} indexUpdater={this.indexUpdater} images={this.props.images} clickedThumb={this.clickedThumb} id={this.props.id} alt="" />
        <Image src={this.props.images[this.state.index].url} key={this.props.id} alt="style photograph" />
        {this.state.index !== this.props.images.length - 1 && <RightArrow onClick={this.clickNavHandler}><FontAwesome id="1" name="angle-right" size="2x" /></RightArrow> }
      </Wrapper>
    );
  }
}

export default ProductImages;
