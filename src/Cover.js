import React from "react";
import mainCover from "./assets/images/2001.jpeg";

class Cover extends React.Component {
  render() {
    return (
      <div className="left">
        <img className="cover" src={mainCover} alt="" />
      </div>
    );
  }
}

export default Cover;
