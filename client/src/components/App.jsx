import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Product from './Product.jsx';
import QnA from './QnA.jsx';
import Reviews from './Reviews.jsx';

const Banner = styled.div`
  position: relative;
  margin: -10px auto 0 auto;
  width: 75vw;
  height: 9vh;
  max-height: 9vh;
  background: #6d6d6d;
  margin-bottom: 1vh;
`;

const Logo = styled.div`
  position: absolute;
  bottom: 1vh;
  left: 1vw;
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  text-shadow: 1px 1px 2px #80ccc4;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: null,
      productStyles: null,
      reviews: null,
      reviewsMeta: null,
      questions: null,
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    axios.get(path.slice(-6))
      .then((res) => {
        this.setState({
          productDetails: res.data[0],
          productStyles: res.data[1],
          reviews: res.data[2],
          reviewsMeta: res.data[3],
          questions: res.data[4],
        });
      })
      .catch((err) => { throw err; });
  }

  render() {
    if (this.state.productDetails) {
      return (
        <div>
          <Banner><Logo>Ninja Cobbles</Logo></Banner>
          <Product
            productDetails={this.state.productDetails}
            productStyles={this.state.productStyles}
          />
          <QnA questions={this.state.questions} name={this.state.productDetails.name} />
          <Reviews reviews={this.state.reviews} reviewsMeta={this.state.reviewsMeta} />
        </div>
      );
    }
    return <div />;
  }
}

export default App;
