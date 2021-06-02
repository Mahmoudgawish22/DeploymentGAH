import '../footer/footer.css';
import React from 'react';
import logo from "../../../imgs/193171559_169250608475072_5253348756644639465_n.png";
function Footer() {
  return (
            <div id='footer'>
                <div className='footercontent'>
                <div id='footerlogo'>
                <img id='logo' src={logo} alt='Logo'/>
                </div>
                <hr style={{width: '30%', color: 'white'}}/>
                <p className='icondiscrbfooter'>
                    إحدى مشروعات م/ <span style={{color: 'white'}}> Mahmoud Gawish </span>
                    <br/>
                    صُمم الموقع كاملًا باستخدام تكنولوجيا الـMern Stack
                    <br/>
                    للتواصل واتساب مع المطورين: 01008383020
                    <br/>
                    <br/>
                    <span style={{color: 'white'}}> 2021 </span>
                </p>
                </div>
            </div>
  );
}

export default Footer;