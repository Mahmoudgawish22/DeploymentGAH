import '../addingPost/addphoto.css'
import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../../actions/posts.js';
import MyVerticallyCenteredModal from '../modals/modal.js'
import logo from '../../../../imgs/193171559_169250608475072_5253348756644639465_n.png'
import { useHistory } from 'react-router-dom'
import LoadingModal from '../modals/loadingmodal.js'


function Addphoto(props) {
  const history = useHistory();
    const [photoPosts, setPhotoPosts] = useState({
        title: '',
        subtitle: '',
        tags: '',
        photo: '',
        slideshow: 0
    })
    const [modalShow, setModalShow] = useState(false);
    const [loadingModalShow, setLoadingModalShow] = useState(false);
    const clear=()=>setPhotoPosts({ title: '', subtitle: '', tags: '', photo: '', slideshow: 0 });

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadingModalShow(true);
        dispatch(createPost(photoPosts, setModalShow, history, setLoadingModalShow));
    }
    return (
      <div id='formback'>
        <div id='navCpanel'>
            <img id='logoCpanel' src={logo} alt='Logo'/>
            <label style={{color: 'white', fontFamily: "Poppins"}}>New Post</label>
            </div>
        <form id='addpost' onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="title">Title:</label>
      <input value={photoPosts.title} type="text" onChange={(e)=> setPhotoPosts({...photoPosts, title: e.target.value})} class="form-control" id="title" placeholder="Enter Photo Title" required/>
    </div>
    <div class="form-group">
      <label for="subtitle">Type:</label>
      <input value={photoPosts.subtitle} type="text" onChange={(e)=> setPhotoPosts({...photoPosts, subtitle: e.target.value})} class="form-control" id="subtitle" placeholder="Enter Photo Subtitle" required/>
    </div>
    <div class="form-group">
      <label for="tags">Palce:</label>
      <input value={photoPosts.tags} type="text" onChange={(e)=> setPhotoPosts({...photoPosts, tags: e.target.value})} class="form-control" id="tags" placeholder="Enter Tags seperated by ',' " required/>
    </div>
    <div class="form-group">
    <label for="photo">Upload The Photo:</label>
    <br/>
    <FileBase type='file' onDone={({base64}) => setPhotoPosts({...photoPosts, photo: base64})} class="form-control-file" id="photo" multiple={false}></FileBase>
  </div>
  {photoPosts.slideshow==0? 
  <a onClick={()=> setPhotoPosts({...photoPosts, slideshow: 1})} class="btn btn-info btn-block">Add To Slideshow</a>
  : <a onClick={()=> setPhotoPosts({...photoPosts, slideshow: 0})} class="btn btn-light btn-block">Remove From Slideshow</a> }
    <button type="submit" class="btn btn-dark btn-block">Submit</button>
    <br/>
  </form>
  <MyVerticallyCenteredModal
        show={modalShow}
        textStatu= 'Post Added Successfully'
        title= 'progressing..'
        onHide={() => setModalShow(false)}
        onExit={clear}
      />
      <LoadingModal
        show={loadingModalShow}
        dialogClassName="modal-60w"
        backdrop="static"
  />
  </div>
    )
}
export default Addphoto