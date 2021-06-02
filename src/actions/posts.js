import { FETCH_ALL, DELETE, UPDATE, CREATE} from '../constants/actionTypes'
import * as api from '../api'

export const getPosts = (history) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}
export const createPost = (post, setModalShow, history, setLoadingModalShow) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data});
        setLoadingModalShow(false);
        setModalShow(true);
    } catch (error) {
        setLoadingModalShow(false);
        history.push('/');
    }
}
export const updatePost = (id, post, setModalShow, setReview, history, setLoadingModalShow) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data});
        setLoadingModalShow(false);
        setReview('Post Updated Successfully');
        setModalShow(true);
    } catch (error) {
        setLoadingModalShow(false);
        history.push('/');
    }
}
export const deletePost = (id, setModalShow, setReview, history, setLoadingModalShow) => async (dispatch) => {
    try {
        await api.deletePost(id);
        setLoadingModalShow(false);
        setReview('Post Deleted Successfully');
        setModalShow(true);
        dispatch( { type: DELETE, payload: id });
    } catch (error) {
        setLoadingModalShow(false);
        history.push('/');
    }
}