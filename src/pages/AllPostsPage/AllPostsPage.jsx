import { useState, useEffect } from 'react';
import { getAllPosts, deletePost, updatePost } from '../../utilities/posts-service';
import { Link } from 'react-router-dom';

export default function AllPostsPage() {
    const [posts, setPosts] = useState([])
    const [refresh, toggleRefresh] = useState()

    useEffect(function() {
        async function retrievePosts() {
            const retrievedPosts = await getAllPosts();
            setPosts(retrievedPosts)
        }
       retrievePosts()
    }, [posts]) 

    async function deleteImage(id) {
        console.log('in delete image function')
        await deletePost(id)
        const postsList = await getAllPosts()
        setPosts(postsList)
    }

    async function updatePost(id) {
        await updatePost(id)
        toggleRefresh({})
    }

    return(
        <>
        <h1>All Your Posts</h1>

        { posts.map( (post, idx)  => (
            <div key={idx}>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                <button onClick={ () => deleteImage(post._id)}>Delete Post</button>
                <Link to={`/posts/${post._id}/edit`}><button>Edit Post</button></Link>
                <Link to={`/posts/${post._id}`}><button>Post</button></Link>

            </div>
        ))}

        <h3>No Posts Yet</h3>
        
        </>
    )
};  