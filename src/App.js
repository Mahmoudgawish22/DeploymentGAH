import './App.css';
import React, { useEffect } from 'react';
import Homepage from './components/homePage/homepage'
import {BrowserRouter, Route} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts.js'
import { getUsers } from './actions/auth.js'
import { getMessages } from './actions/messages.js'
import { useHistory } from 'react-router-dom'
import Login from '../src/components/login/login.js'
import Cpanel from '../src/components/cpanelPage/cpanel.js'
function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=> {
    dispatch(getPosts(history));
    dispatch(getUsers(history));
    dispatch(getMessages(history));
  }, [dispatch]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/cpanel' component={Cpanel}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
