import React, { Component } from "react";

import ReactImageMagnify from "react-image-magnify";

const styles = (theme) => ({
  root: {}
});

export default function MyReactImageMagnify() {
  
    return (
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: "https://placeimg.com/640/480/4"
          },
          largeImage: {
            src: "https://placeimg.com/1280/968/4",
            width: 1280,
            height: 968
          },
          enlargedImagePortalId: "myPortal"
        }}
      />
    );
  
}

