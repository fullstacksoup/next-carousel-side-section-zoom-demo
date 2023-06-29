import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageMagnifyComp from "./ImageMagnifyComp";

function renderItem(image) {      
  return <ImageMagnifyComp image={image}/>
}

export default function MyImageGallery(props) {

   
    return (
      
            <ImageGallery key={1}
                        items={images}
                        startIndex={1}
                        thumbnailPosition="left"
                        renderItem= {(e) => renderItem(e)}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={false}/>
          )
 }

const images = [
  {
    original: "images/lg_img_1.jpg",
    thumbnail: "images/sm_img_1.jpg"
  },
  {
    original: "images/lg_img_2.jpg",
    thumbnail: "images/sm_img_2.jpg"
  },
  {
    original: "images/lg_img_3.jpg",
    thumbnail: "images/sm_img_3.jpg"
  },
  {
    original: "images/lg_img_4.jpg",
    thumbnail: "images/sm_img_4.jpg"
  }
]