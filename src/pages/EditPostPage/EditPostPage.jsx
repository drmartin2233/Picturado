import { useState, useEffect } from "react";
import * as postsService from '../../utilities/posts-service'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function EditPostPage() {
const navigate = useNavigate() 
const [post, setPost] = useState({});
let {id}= useParams()
console.log(id)

useEffect(function() {
    async function retrievePost() {
        const retrievedPost = await postsService.getPost(id);
        setPost(retrievedPost)
    }
   retrievePost()
}, [])  



  function handleChange(evt) {
    setPost({ ...post, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("banana")
    postsService.updatePost(id, post);
    setPost({title:"", body:""});
    navigate("/posts")

  }

  
    return (
      <>
      <h1>Edit Post</h1>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:
            <input type="text" name="title" id="title" onChange={handleChange} value={post.title}/>
          </label>
        <label htmlFor="body">Body:
            <input type="text" name="body" id="body" onChange={handleChange} value={post.body}/>
          </label>

          <input type="submit" value="Edit Post"/>
      </form>
      
      
      </>
    );
 }