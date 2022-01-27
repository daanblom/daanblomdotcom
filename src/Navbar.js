import React from "react";

function Navbar() {
  return (
    <div className="container">
      <div className="nav p-3">
        <div className="col col-12 col-md-6 d-inline-flex align-items-center justify-content-center justify-content-md-start pb-2 pb-md-0 OSBI text-black logo">
          DAANBLOM.COM
        </div>
        <div className="col col-12 col-md-6 d-inline-flex justify-content-center justify-content-md-end">
          <ul className="d-inline-flex m-0 p-0 g-2">
            <li className="px-2 px-md-3 mx-1">
              <a href="/" className="link">
                Animation
              </a>
            </li>
            <li className="px-2 px-md-3 mx-1">
              <a href="/" className="link">
                Photography
              </a>
            </li>
            <li className="px-2 px-md-3 mx-1">
              <a href="/" className="link">
                About
              </a>
            </li>
            <li className="px-2 px-md-3 mx-1">
              <a href="/" className="link">
                Lab
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
