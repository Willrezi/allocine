import React from "react";

class Button extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        <button className={this.props.theme}>{this.props.text}</button>
      </a>
    );
  }
}

export default Button;
