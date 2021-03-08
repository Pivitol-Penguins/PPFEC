import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 70vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Expanded = styled.img`
  ${(props) => props.zoomed && 'transform: scale(2.5)'};
  display: block;
  max-height: 95vh;
  cursor: ${(props) => (props.zoomed ? 'zoom-out' : 'zoom-in')};
  // background-position-x: ${(props) => props.x};
  // background-position-y: ${(props) => props.y};
`;

class ExpandedImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomed: false,
      // x: 0,
      // y: 0,
    };
    this.expanded = React.createRef();
    this.imageClickHandler = this.imageClickHandler.bind(this);
    this.trackMouse = this.trackMouse.bind(this);
  }

  trackMouse() {
    const node = this.expanded.current;

    node.addEventListener('mousemove', (e) => {
      console.log('hello');
      this.setState({
        x: -e.offsetX,
        y: -e.offsetY,
      });
      // node.style.setProperty('--x', `${-e.offsetX}px`);
      // node.style.setProperty('--y', `${-e.offsetY}px`);
    });
  }

  imageClickHandler(event) {
    event.stopPropagation();
    this.setState((prevState) => ({ zoomed: !prevState.zoomed }), this.trackMouse);
  }

  render() {
    return ReactDOM.createPortal(
      <Wrapper>
        <Expanded
          key={this.props.id}
          src={this.props.src}
          alt={this.props.alt}
          zoomed={this.state.zoomed}
          ref={this.expanded}
          x={this.state.x}
          y={this.state.y}
          onMouseDown={(event) => this.imageClickHandler(event)}
        />
      </Wrapper>,
      document.getElementById('modal-root'),
    );
  }
}

export default ExpandedImage;
