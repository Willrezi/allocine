import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="right">
        <p>
          <span className="label">{this.props.label}</span>{" "}
          <span className="text">{this.props.text}</span>
        </p>
      </div>
    );
  }
}

export default Item;
