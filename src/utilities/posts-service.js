import * as postsAPI from './posts-api';


export async function getAllPosts() {
    const posts = await postsAPI.getPosts();
    return posts
};

export async function createPost(postData) {
    const post = await postsAPI.createPostRequest(postData);
    return post;
    
}


