import React, { Component } from "react";
import Comment from "./components/Comment";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          name: "Vivek",
          comment: "Test comment 1",
        },
        {
          id: 2,
          name: "Vivek Singh",
          comment: "Test comment 2",
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.comment.value);
    if (e.target.name.comment.value.length > 200) {
      alert("comment should be less than 200 characters");
    } else {
      const Add = this.state.comments.concat({
        id: this.state.comments.length + 1,
        name: e.target.name.value,
        comment: e.target.comment.value,
      });
      this.setState({ comments: Add });
      document.getElementById("form").reset();
    }
  }
  deleteComment(index) {
    // console.log();
    // this.setState({
    //   comments: this.setState.items.filter((item) => item.id !== e.target.id),
    // });
    let com = this.state.comments;
    com.splice(index, 1);
    this.setState({ comments: com });
  }
  render() {
    return (
      <div className="App">
        {this.state.comments.map((comment, index) => {
          console.log(comment);
          return (
            <div>
              <Comment
                key={index}
                name={comment.name}
                comment={comment.comment}
              />
              <button className="edit-button">Edit</button>
              <button
                id={comment.id}
                className="delete-button"
                onClick={this.deleteComment}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div>
          <form id="form" onSubmit={this.handleSubmit}>
            <textarea
              className="commentInput"
              placeholder="Enter Comment"
              name="comment"
            ></textarea>
            <label>Name:</label>
            <input className="nameInput" name="name"></input>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
