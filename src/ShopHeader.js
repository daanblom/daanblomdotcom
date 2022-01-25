import HoverVideoPlayer from "react-hover-video-player";
import video from "../src/media/ShopHeader.mp4";

function ShopHeader() {
  return (
    <div className="container">
      <div className="col p-5 ">
        <h1>title.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan in nisl ut hendrerit. Praesent dictum massa lectus, quis
          ullamcorper velit pharetra sed.
        </p>
      </div>
      <div className=""></div>
      <div className="col">
        <HoverVideoPlayer
          videoSrc={video}
          disablePictureInPicture={false}
          loop={false}
          restartOnPaused
        />
      </div>
    </div>
  );
}

export default ShopHeader;
