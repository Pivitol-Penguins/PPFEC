import React from 'react';

function ProductImages({images}) {
  if (images.results) {
    return (
      <div>
        <div>product images</div>
        <img src={images.results[0].photos[0].url} alt='style photograph' width="200" height="300"/>
      </div>
    )
  } else {
    return <div></div>
  }
}


export default ProductImages;