import * as postsAPI from './posts-api';


export async function getAllPosts() {
    const posts = await postsAPI.getPosts();
    return posts
};

export async function getPost() {
    const posts = await postsAPI.getPost();
    return posts
};


export async function createPost(postData) {
    const post = await postsAPI.createPostRequest(postData);
    return post;
    
}


export async function deletePost(id) {
    const post = await postsAPI.deletePostRequest(id);
    
}

export async function updatePost(postData) {
    const post = await postsAPI.editPostRequest(postData);
    return post;
     
}
   