import React from 'react';
import Photos from './Photos.jsx'


class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state ={

    }
  }


  render () {
    return(
      <div>
          A: {this.props.answer.body}
          <div>{this.props.answer.photos.length !=  0 ? <Photos photos={this.props.answer.photos}/>:  null}</div>
      </div>
    )
  }

}
export default Answer;