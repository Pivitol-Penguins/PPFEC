import React, { Suspense } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from './Product.jsx';
const QnA = React.lazy(() => import('./QnA.jsx'));
const Reviews = React.lazy(() => import('./Reviews.jsx'));

// import QnA from './QnA.jsx';
// import Reviews from './Reviews.jsx';

const Lead = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

const Banner = styled.div`
  position: relative;
  margin: -10px auto 0 auto;
  width: 75vw;
  height: 9vh;
  max-height: 9vh;
  background: #6d6d6d;
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

const Announcement = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  align-items: center;
  justify-content: center;
  padding: .75vh 0;
`;

const Message = styled.div`
  font-size: .9rem;
  font-weight: 300;
  color: #424242;
  font-style: italic;
`;

const Footer = styled.div`
  font-family: 'Lato', sans-serif;
  margin: 0 0 -10px -8px;
  width: 100vw;
  height: 2vh;
  max-height: 2vh;
  background: #6d6d6d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: .75vh;
`;

const Creators = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  flex: space-evenly;
`;

const FooterMessage = styled.div`
  font-size: .9rem;
  font-weight: 300;
  color: #fff;
  font-weight: 700;
  margin-left: 1vw;
  text-shadow: 1px 1px 2px #80ccc4;
`;

const Creator = styled.a`
  margin: 0 2vw;
  font-size: .9rem;
  font-weight: 300;
  color: #fff;;
`;

const Copyright = styled.div`
  font-size: .9rem;
  font-weight: 300;
  color: #fff;
  margin-right: 2vw;
`;

const Link = styled.a`
margin-left: .5vw;
font-size: .9rem;
font-weight: 300;
text-decoration: underline;
color: #424242;
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
          <Lead>
            <Banner>
              <Logo>Ninja Cobbles</Logo>
            </Banner>
            <Announcement>
              <Message>SAFE IN-STORE SHOPPING:</Message>
              <Link href="https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html" target="blank">Our safety practices to help keep you healthy</Link>
            </Announcement>
          </Lead>

          <Product
            productDetails={this.state.productDetails}
            productStyles={this.state.productStyles}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <QnA questions={this.state.questions} name={this.state.productDetails.name} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Reviews reviews={this.state.reviews} reviewsMeta={this.state.reviewsMeta} />
          </Suspense>
          <Footer>
            <Creators>
              <FooterMessage>Created by:</FooterMessage>
              <Creator href="https://github.com/benngfour" target="blank">Benjamin Wu</Creator>
              <Creator href="https://github.com/JacobWPeterson" target="blank">Jacob Peterson</Creator>
              <Creator href="https://github.com/nilaip96" target="blank">Nilai Patel</Creator>
            </Creators>
            <Copyright>PPFEC ©2021</Copyright>
          </Footer>
        </div>
      );
    }
    return <div />;
  }
}

export default App;



