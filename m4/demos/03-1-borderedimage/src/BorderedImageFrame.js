import React from 'react';

function BorderedImageFrame(props) {
  return (
    <img src={props.imageURL} alt={props.alt} style={{
      border: "1px solid red",
      width: "400px"
    }} />
  );
};

export default BorderedImageFrame;