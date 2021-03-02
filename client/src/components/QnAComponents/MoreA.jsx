import React from 'react';


class MoreA extends React.Component {
  constructor(props) {
    super(props)
    this.state ={

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicked');
    this.props.func();
  }


  render () {
    return(
      <div>
        {this.props.display ? <button onClick={this.handleClick}>More Answers</button>: null}
      </div>
    )
  }

}
export default MoreA;