import { FETCH_ALL_MESSAGES, DELETE_MESSAGE, CREATE_MESSAGE } from '../constants/actionTypes'
import * as api from '../api'

export const deleteMessage = (id, setModalShowD, history, setLoadingModalShow) => async (dispatch) => {
    try {
        await api.deleteMessage(id);
        setLoadingModalShow(false);
        dispatch( { type: DELETE_MESSAGE, payload: id });
    } catch (error) {
        setLoadingModalShow(false);
        history.push('/');
    }
}

export const getMessages = (history) => async (dispatch) => {
    try {
        const { data } = await api.fetchMessages();
        dispatch({ type: FETCH_ALL_MESSAGES, payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const createMessage = (message, setModalShow, setLoadingModalShow) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(message);
        dispatch({ type: CREATE_MESSAGE, payload: data})
        setLoadingModalShow(false);
        setModalShow(true);
    } catch (error) {
        setLoadingModalShow(false);
        console.log(error);
    }
}
