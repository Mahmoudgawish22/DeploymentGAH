import '../editPost/editpost.css'
import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { updatePost, deletePost } from '../../../../actions/posts.js';
import MyVerticallyCenteredModal from '../modals/modal.js'
import MyVerticallyCenteredModalForDeleting from '../modals/deletemodal.js'
import { useHistory } from 'react-router-dom'
import LoadingModal from '../modals/loadingmodal.js'

function EditPost(props) {
  const history = useHistory();
  const dispatchFunc = () => {
    setModalShowDelete(false);
    setLoadingModalShow(true);
    dispatch(deletePost(props.idDB, setModalShow, setReview, history, setLoadingModalShow))
  }
    const [photoPosts, setPhotoPosts] = useState({
        title: props.title,
        subtitle: props.subtitle,
        tags: props.tags,
        photo: props.photo,
        slideshow: props.slideshow
    })
    const [modalShow, setModalShow] = useState(false);
    const [modalShowDelete, setModalShowDelete] = useState(false);
    const [loadingModalShow, setLoadingModalShow] = useState(false);
    const [review, setReview] = useState('Nothing To Add, Sir!');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadingModalShow(true);
        dispatch(updatePost(props.idDB ,photoPosts, setModalShow, setReview, history, setLoadingModalShow));
    }
    const handleClick = () => {
      setReview('Are U Sure?');
      setModalShowDelete(true);
    }
    return (
        <div id='editpostFB'>
            <form id='editpost' onSubmit={handleSubmit}>
    <div class="form-group mb-2">
      <label for="title">Update Title:</label>
      <input type="text" value={photoPosts.title} onChange={(e)=> setPhotoPosts({...photoPosts, title: e.target.value})} class="form-control" id="title" placeholder="Enter Photo Title" required/>
    </div>
    <div class="form-group mb-2">
      <label for="subtitle">Update Type:</label>
      <input type="text" value={photoPosts.subtitle} onChange={(e)=> setPhotoPosts({...photoPosts, subtitle: e.target.value})} class="form-control" id="subtitle" placeholder="Enter Photo Subtitle" required/>
    </div>
    <div class="form-group mb-2">
      <label for="tags">Update Palce:</label>
      <input type="text" value={photoPosts.tags} onChange={(e)=> setPhotoPosts({...photoPosts, tags: e.target.value})} class="form-control" id="tags" placeholder="Enter Tags seperated by ',' " required/>
    </div>
    <div class="form-group mb-2">
    <label for="photo">Reupload The Photo:</label>
    <br/>
    <FileBase type='file' onDone={({base64}) => setPhotoPosts({...photoPosts, photo: base64})} class="form-control-file" id="photo" multiple={false}></FileBase>
  </div>
    {photoPosts.slideshow==0? 
    <a onClick={()=> setPhotoPosts({...photoPosts, slideshow: 1})} class="btn btn-info btn-block">Add To Slideshow</a>
  : <a onClick={()=> setPhotoPosts({...photoPosts, slideshow: 0})} class="btn btn-light btn-block">Remove From Slideshow</a> }
  
    <a onClick={handleClick} class="btn btn-danger btn-block">Delete</a>
    <button type="submit" class="btn btn-dark btn-block">Update</button>
  </form>
  <MyVerticallyCenteredModal
        show={modalShow}
        textStatu= {review}
        title= 'progrssing..'
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModalForDeleting
      show={modalShowDelete}
      backdrop="static"
      textStatu= {review}
      title= 'Progressing..'
      onHide={() => setModalShowDelete(false)}
      dispatch={dispatchFunc}
      />
      <LoadingModal
        show={loadingModalShow}
        dialogClassName="modal-60w"
        backdrop="static"
  />
        </div>
    )
}
export default EditPost