import '../products/products.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Lightbox from 'lightbox-react'
import 'lightbox-react/style.css'

function Products(props) {
    const posts = useSelector((state) => state.posts);
    const reversedPosts = posts.slice(0).reverse();
    const images = posts.slice(0).reverse().map(item=> item.photo);
    const [lightbox, setLightbox] = useState({
        photoIndex: 0,
        isOpen: false,
    })
    return (
        <div id='products'>
            <h1 id='productsDisc'>
            Which Creativity Suits You Best?
            </h1>
                <ul className='photoposts'>
                {
          !posts.length? 
          <div class="spinner-box">
          <div class="configure-border-1">  
          <div class="configure-core"></div>
          </div>  
          <div class="configure-border-2">
          <div class="configure-core"></div>
          </div> 
          </div>
          : posts.slice(0).reverse().map((item, i) => <li key={item._id} className='photolink'>
          <a className='itemlink' onClick={()=> setLightbox({photoIndex: i, isOpen: true})} >
              <img className='imgposts' style={{maxHeight: '100%', minWidth: '100%' , objectFit: 'cover',  verticalAlign: 'bottom'}} src={item.photo} alt='post'/>
          </a>
      </li>)
        }
                </ul>
                {lightbox.isOpen && (
          <Lightbox
            mainSrc={images[lightbox.photoIndex]}
            nextSrc={images[(lightbox.photoIndex + 1) % images.length]}
            prevSrc={images[(lightbox.photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setLightbox({ isOpen: false })}
            onMovePrevRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + images.length - 1) % images.length, isOpen: true})}
            onMoveNextRequest={() =>setLightbox({photoIndex: (lightbox.photoIndex + 1) % images.length, isOpen: true})}
            imageTitle= {reversedPosts[lightbox.photoIndex].title}
            imageCaption= {
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '5px', height:'auto'}}>
                    <h4 style={{fontFamily: 'Open Sans'}}>{reversedPosts[lightbox.photoIndex].subtitle}</h4>
                    <h6 style={{fontFamily: 'cursive'}}>@ {reversedPosts[lightbox.photoIndex].tags}</h6>
                </div>
            }
          />
        )}
        </div>
    )
}
export default Products