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
        {this.props.photos.map((photo) => <img src={photo} height="100" width="" alt={photo} key={photo} />)}
      </div>
    );
  }
}
export default Photos;
