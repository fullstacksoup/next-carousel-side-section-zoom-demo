import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import "react-image-gallery/styles/css/image-gallery.css";

import MyImageGallery from "../../components/MyImageGallery";
import { Box, Paper } from "@mui/material";

export default function Index() {
  
    return (
      <Grid container spacing={4}>
        <Grid item xs={5}>
          <MyImageGallery />
        </Grid>
        <Grid item xs={7} >    
           
           <Box id="myPortal" variant="paper" style={{ width: '90%', height: '90%'}}/> 
           {/* <div id="myPortal"/> */}
           
                     
        </Grid>
      </Grid>
    );

}
