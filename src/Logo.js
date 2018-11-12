import React from "react";

import mainLogo from "./assets/images/Allociné_Logo.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <a href={this.props.url}>
          <img src={mainLogo} alt="" width="200" />
        </a>
      </div>
    );
  }
}

export default Logo;
