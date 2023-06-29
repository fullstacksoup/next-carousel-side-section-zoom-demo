import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGalleryComp from "@/components/typescript/ImageGalleryComp";

export default function Index() {
  const divStyles: any = {    
    padding: '1px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 10px gray) drop-shadow(0 0 10px gray)'
  };
  
  return (
    <Container maxWidth='lg'>
    <Grid container spacing={4}>
      <Grid item xs={5}>
        <ImageGalleryComp />
      </Grid>
      <Grid item xs={7} >    
        <div id="myPortal" style={divStyles}/>                                 
      </Grid>
    </Grid>
    </Container>
  );

}
