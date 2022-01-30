import React from 'react';

export const ImageList = (props) => {
   const images = props.images.map((imag) => {
        return <img key={imag.id} src={ imag.webformatURL}  />
    })
  return <div>
     {images}
  </div>;
};
