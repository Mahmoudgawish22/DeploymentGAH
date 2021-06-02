import axios from 'axios';

const API = axios.create({ baseURL: 'https://omartimo.herokuapp.com'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchUsers = () => API.get('/users');
export const signUp = (formData) => API.post('/users/signup', formData);
export const signIn = (loginFormData) => API.post('/users/signin', loginFormData);
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);

export const fetchMessages = () => API.get('/messages');
export const createMessage = (newMessage) => API.post('/messages', newMessage);
export const deleteMessage = (id) => API.delete(`/messages/${id}`);