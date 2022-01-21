import React from 'react';

export const ImageList = (props) => {
   const images = props.images.map((image) => {
        return <img key={image.id} src={ image.webformatURL} alt='image' />
    })
  return <div>
     {images}
  </div>;
};
