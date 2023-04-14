import { useState, useEffect } from 'react';
import { getAllPosts, deletePost } from '../../utilities/posts-service';
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
    }, [refresh]) 

    async function deleteImage(id) {
        console.log('in delete image function')
        await deletePost(id)
        toggleRefresh({})
    }


    return(
        <>
        <h1>AllPostsPage</h1>

        { posts.map( post => (
            <div>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                <button onClick={ () => deleteImage(post._id)}>Delete Post</button>
                <button>Edit Post</button>
            </div>
        ))}

        <h3>No Posts Yet</h3>
        
        </>
    )
};  