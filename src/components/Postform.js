import React, { Component } from "react";
import { connect } from "react-redux";
import { singlePost } from "../actions/postActions";

import axios from "axios";
import "../App.css";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log("state: ", this.state[e.target.name]);
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    const postData = {
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    };
    this.props.singlePost(postData);
    //call action
    // axios
    //   .post(
    //     "https://jsonplaceholder.typicode.com/posts/",
    //     { headers: headers },
    //     body
    //   )
    //   .then(res => JSON.stringify(res))
    //   .then(data => console.log(data));
  }
  render() {
    return (
      <div className="App">
        Add Posters
        <form onSubmit={this.onSubmit}>
          <div>
            <h2>Title</h2>
            <input
              placeholder="Add title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <h2>Body</h2>
            <textarea
              placeholder="Add Body"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button name="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { singlePost }
)(Postform);
