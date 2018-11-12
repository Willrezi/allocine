import React from "react";

class Subtitle extends React.Component {
  render() {
    return (
      <div className="subtitle">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Subtitle;
