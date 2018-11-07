import { FETCH_URL, NEW_URL } from "./type.js";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_URL,
        payload: posts
      })
    );
};

export const singlePost = postData => dispatch => {
  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts/",
      { headers: postData.headers },
      postData.body
    )
    .then(res => JSON.stringify(res))
    .then(post =>
      dispatch({
        type: NEW_URL,
        payload: post
      })
    );
};
