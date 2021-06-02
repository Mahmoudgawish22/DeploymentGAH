import '../login/login.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from "../../imgs/192166475_465791097850428_441314903489211223_n.jpg";
import { GoogleLogin} from 'react-google-login'
import { signIn } from '../../actions/auth.js'
import LoadingModal from '../cpanelPage/forms/modals/loadingmodal.js'


function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const users = useSelector((state) => state.userReducer);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    const getUser = users.filter(item=> item.email == result.email);
    if (getUser.length == 1 ) {
        dispatch({ type: 'AUTH', data: {result: getUser[0], token}});
        history.push('/cpanel')
    } else {
      setErrorLoginRespond({
        message: 1
      })
    }
  }
  const googleFailure = (error) => {
    console.log(error);
    console.log('error with Google')
  }
  const [loginFormData, setLoginFormData] = useState({
    password: '',
    email: ''
  })
  const [loadingModalShow, setLoadingModalShow] = useState(false);
  const [errorLoginRespond, setErrorLoginRespond] = useState({
    message: 0
  })

  const handleChange = (e) => {
    setLoginFormData({...loginFormData, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingModalShow(true);
    dispatch(signIn(loginFormData,setErrorLoginRespond, history, setLoadingModalShow));

  }
  if (!user?.result?.name) {
    return (
        <div id='login' style={{backgroundImage: `url(${logo})`}}>
            <h1 style={{color: 'white', fontFamily: "'Barlow Condensed'"}}>
                Welcome To Omar Timo C-Panel, Please Log in to Continue!
            </h1>
            <form onSubmit={handleSubmit} style={{textAlign: 'left',padding: '30px', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
              {errorLoginRespond.message==1?
              <label style={{color: 'red'}}>*Please Check Your Email And Paasword</label>
              :<span></span>
            }
              
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" onChange={handleChange} name='password' id="password" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-dark btn-block">Login</button>
  <a href='/' style={{color: '#333'}}>Go Back?</a>
 { <GoogleLogin
  clientId= '1032910013667-ckmj000k163999dd1sckpfjalrh3emac.apps.googleusercontent.com'
  render= {(renderProps) => (
    <a onClick={renderProps.onClick} class="btn btn-info btn-block"><i class="fab fa-google"></i> Login With Gmail</a>
  )}
  onSuccess= {googleSuccess}
  onFailure= {googleFailure}
  cookiePolicy= 'single_host_origin'
  />}
  
</form>
<LoadingModal
        show={loadingModalShow}
        dialogClassName="modal-60w"
        backdrop="static"
  />
        </div>
    )
  } else {
    window.location.replace("/");
}
}
export default Login