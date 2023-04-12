import { set } from "mongoose";
import { useState } from "react";
import * as postsService from '../../utilities/posts-service'


export default function NewPostPage() {
const [post, setPost] = useState('');

  function handleChange(evt) {
    setPost(evt.target.value)
  }

  async function handleSubmit(evt) {
    evt.preventdefault();
    postsService.createPost(post);
    setPost('');
  }
    return (
      <>
      <h1>New Post</h1>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="text">Text:
          <input type="text" name="text" id="text" onChange={handleChange}/>
        </label>
        <button type="submit">Add Post</button>
      </form>
      
      
      </>
    );
  }