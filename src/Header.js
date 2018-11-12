import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo url="http://www.allocine.fr/" />
      </div>
    );
  }
}

export default Header;
