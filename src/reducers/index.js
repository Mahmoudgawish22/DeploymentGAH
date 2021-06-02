import { combineReducers } from 'redux'
import posts from './posts.js'
import authReducer from './auth.js'
import userReducer from './users.js'
import messageReducer from './messages.js'

export default combineReducers({ posts, authReducer, userReducer, messageReducer });