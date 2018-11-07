import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions.js";

import "../App.css";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.singlePost) this.props.posts.unshift(nextProps.singlePost);
    console.log("post", nextProps.singlePost);
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        Posters
        {posts.map(posts => (
          <div key={posts.id}>
            <h3>Title: {posts.title}</h3>
            <p>Body: {posts.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.postsReducer.items,
  singlePost: state.postsReducer.item
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
