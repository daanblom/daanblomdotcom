import HoverVideoPlayer from "react-hover-video-player";
import video from "../src/media/ShopHeader.mp4";

function ShopHeader() {
  return (
    <div className="container">
      <div className="col-12 col-md-8 pt-5 m-auto ">
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
      <div className="row">
        <div className="col-1 col-md-3"></div>
        <div className="col-10 col-md-6">
          <div className="shop--card p-4 shadow-lg">
            <button onClick="">Shop now.</button>
          </div>
        </div>
        <div className="col-1 col-md-3"></div>
        <p className="text-center pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default ShopHeader;
