import { set } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as postsService from '../../utilities/posts-service'


export default function NewPostPage() {
const navigate = useNavigate()  
const [post, setPost] = useState({title:"", body:""});

  function handleChange(evt) {
    setPost({ ...post, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("banana")
    postsService.createPost(post);
    setPost({title:"", body:""});
    navigate("/posts")
  }
    return (
      <>
      <h1>New Post</h1>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:
            <input type="text" name="title" id="title" onChange={handleChange} value={post.title}/>
          </label>
        <label htmlFor="body">Body:
            <input type="text" name="body" id="body" onChange={handleChange} value={post.body}/>
          </label>

          <input type="submit" value="Add Post" />
      </form>
      
      
      </>
    );
 }