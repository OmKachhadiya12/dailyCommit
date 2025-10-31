import React from 'react';
import Post from "./Post/Post.jsx";
import useStyles from "./Styles.jsx"

const Posts = () => {
  const classes = useStyles();

  return (
    <>
        <h1>
            Posts
        </h1>
        <Post/> 
    </>
  )
}

export default Posts;
