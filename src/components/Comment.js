import React, { Component } from "react";
import "../App.css";
class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3 className="text-left commentName">{this.props.name}</h3>
        <p className="comment-text">{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
