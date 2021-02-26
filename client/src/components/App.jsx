import React from 'react';
import Product from './Product.jsx';
import QnA from './QnA.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //componentdidmount get request for product id and set state to pass down to components
  componentDidMount() {
    //axios get request to something
    // console.log(window.location.pathname);
    var path = window.location.pathname;
    console.log('path: ', path);
    console.log(path.slice(-6));
    axios.get(path.slice(-6))
    .then((data)=> {
      console.log('CLIENT SIDE: ', data)
      console.log(data.data)
    })
    .catch((err) => {console.log(err)})
  }


  render() {
    return (
      <div>
        App
        <Product />
        <QnA />
        <Reviews />
      </div>
    );
  }
}

export default App;
