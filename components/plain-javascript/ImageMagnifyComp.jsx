import ReactImageMagnify from "react-image-magnify";

export default function ImageMagnifyComp(props) {
    
    return (
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            width: 400,
            height: 400,
            src: props.image.thumbnail
          },
          largeImage: {
            src: props.image.original,
            width: 1280,
            height: 968
          },
          enlargedImagePortalId: "myPortal"
        }}
      />
    );
  
}

