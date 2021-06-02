import { AUTH, FETCH_ALL_USERS, DELETE_USER, UPDATE_USER, CREATE_USER } from '../constants/actionTypes'
import * as api from '../api'

export const signIn = (loginFormData, setErrorLoginRespond, history, setLoadingModalShow) => async (dispatch) => {
    try {
        var { data } = await api.signIn(loginFormData);
        dispatch({ type: AUTH, data});
        setLoadingModalShow(false);
        history.push('/cpanel')
    } catch (error) {
        setLoadingModalShow(false);
        setErrorLoginRespond({
            message: 1
        });
    }
}

export const signUp = (formData,setReview,setModalShow,setLoadingModalShow) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: CREATE_USER, payload: data});
        setLoadingModalShow(false);
        setReview('Admin Added Successfully');
        setModalShow(true);
    } catch (error) {
        setLoadingModalShow(false);
        setReview('Admin Already Existed');
        setModalShow(true);
    }
}

export const updateUser = (id, user, setModalShow, setReview, setLoadingModalShow) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);
        dispatch({ type: UPDATE_USER, payload: data});
        setLoadingModalShow(false);
        setReview('Admin Updated Successfully');
        setModalShow(true);
    } catch (error) {
        setLoadingModalShow(false);
        setReview('The Two Passwords Don\'t Match');
        setModalShow(true);
    }
}

export const deleteUser = (id, setModalShow, setReview, history, setLoadingModalShow) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        setLoadingModalShow(false);
        setReview('Admin Deleted Successfully');
        setModalShow(true);
        dispatch( { type: DELETE_USER, payload: id });
    } catch (error) {
        setLoadingModalShow(false);
        history.push('/');
    }
}

export const getUsers = (history) => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_ALL_USERS, payload: data});
    } catch (error) {
        console.log(error);
    }
}