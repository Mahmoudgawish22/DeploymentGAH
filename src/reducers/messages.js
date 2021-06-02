import { FETCH_ALL_MESSAGES, DELETE_MESSAGE, CREATE_MESSAGE } from '../constants/actionTypes'

const messageReducer = (messages = [], action) => {
    switch (action.type) {
        case FETCH_ALL_MESSAGES:
            return action.payload;
        case DELETE_MESSAGE:
            return messages.filter(item=> item._id != action.payload)
        case CREATE_MESSAGE:
            return [...messages, action.payload];    
        default:
            return messages;
    }
}
export default messageReducer