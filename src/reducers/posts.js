import { FETCH_ALL, DELETE, UPDATE, CREATE} from '../constants/actionTypes'

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return posts.filter(item=> item._id != action.payload)
        case UPDATE:
            return posts.map(item=> item._id == action.payload._id? action.payload : item)
        case CREATE:
            return [...posts, action.payload];    
        default:
            return posts;
    }
}