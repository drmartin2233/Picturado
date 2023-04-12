import * as postsAPI from './posts-api';


export async function getAllPosts() {
    const posts = await postsAPI.getPosts();
    return posts
};

export async function createPost() {
    postsAPI.createPostRequest();
}


