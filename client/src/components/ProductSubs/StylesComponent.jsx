import React from 'react';
import styled from 'styled-components';

import Price from './Price.jsx';

const StyleWrapper = styled.div`
  margin-bottom: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Style = styled.p`
  font-weight: 700;
  color: #424242;
`;

const SelectedStyle = styled.p`
  margin-left: 1vw;
  font-weight: 300;
  color: #424242;
`;

const Thumbs = styled.div`
flex-basis: 90%
display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const Image = styled.img`
  height: 65px;
  width: 65px;
  object-fit: cover;
  flex: 1 0 21%;
  margin: 1vh 1.2vw 1vh 0;
  padding: 2px;
  border: 3px solid #e0e0e0;
  border-radius: 100%;
  z-index: 0;
  &:hover { border: 3px solid #a0a0a0; };
`;

const SelectedImage = styled.img`
  height: 65px;
  width: 65px;
  object-fit: cover;
  flex: 1 0 21%;
  margin: 1vh 1.2vw 1vh 0;
  padding: 2px;
  border: 3px solid #80ccc4;
  border-radius: 100%;
  z-index: 0;
`;

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousStyle: null,
      currentStyle: null,
      style_id: null,
      previousPrice: null,
      previousSale: null,
      currentPrice: null,
      currentSale: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.passUpStyle = this.passUpStyle.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentStyle: this.props.styles.results[0].name,
      style_id: this.props.styles.results[0].style_id,
      currentPrice: this.props.styles.results[0].original_price,
      currentSale: this.props.styles.results[0].sale_price,
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.setState({
      currentStyle: event.target.alt,
      style_id: Number(event.target.id),
    }, () => this.passUpStyle(this.state.style_id));
  }

  passUpStyle(style) {
    this.props.getStyleID(style);
  }

  render() {
    if (this.state.currentStyle) {
      return (
        <StyleWrapper>

          <Price price={this.state.currentPrice} sale={this.state.currentSale} />

          <TextWrapper>
            <Style>STYLE &gt;</Style>
            <SelectedStyle>{this.state.currentStyle.toUpperCase()}</SelectedStyle>
          </TextWrapper>

          <Thumbs>
            { this.props.styles.results.map((image) => {
              if (image.style_id === this.state.style_id) {
                return (
                  <SelectedImage
                    onClick={this.clickHandler}
                    key={image.style_id}
                    id={image.style_id}
                    src={image.photos[0].thumbnail_url}
                    alt={image.name}
                  />
                );
              }

              if (image.style_id !== this.state.style_id) {
                return (
                  <Image
                    onMouseEnter={() => this.setState((prevState) => ({
                      previousStyle: prevState.currentStyle,
                      currentStyle: image.name,
                      previousPrice: prevState.currentPrice,
                      currentPrice: image.original_price,
                      previousSale: prevState.currentSale,
                      currentSale: image.sale_price,
                    }))}
                    onMouseLeave={() => this.setState((prevState) => ({
                      currentStyle: prevState.previousStyle,
                      currentPrice: prevState.previousPrice,
                      currentSale: prevState.previousSale,
                    }))}
                    onClick={this.clickHandler}
                    key={image.style_id}
                    id={image.style_id}
                    src={image.photos[0].thumbnail_url}
                    alt={image.name}
                  />
                );
              }
              return <div>Hello</div>;
            })}
          </Thumbs>

        </StyleWrapper>
      );
    }
    return <div>Empty</div>;
  }
}

export default Styles;
