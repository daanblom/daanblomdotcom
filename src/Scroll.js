import Marquee from "react-fast-marquee";
import "./main.css";

function Scroll() {
  return (
    <div className="container-fluid p-0">
      <Marquee speed="100">
        <div className="conainer-fluid display-1 scroll pt-4">
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
        </div>
      </Marquee>
      <Marquee speed="100" direction="right">
        <div className="conainer-fluid display-1 scroll pb-4">
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
          <span className="display-1 OS">test </span>
          <span className="display-1 OSI">test </span>
          <span className="display-1 OSBI">test </span>
        </div>
      </Marquee>
    </div>
  );
}

export default Scroll;
