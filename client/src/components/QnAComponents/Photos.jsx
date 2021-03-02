import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {this.props.photos.map((photo) => <img src={photo} height="200" width="200" alt="" />)}
      </div>
    );
  }
}
export default Photos;
