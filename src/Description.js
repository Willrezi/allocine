import React from "react";

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Description;
