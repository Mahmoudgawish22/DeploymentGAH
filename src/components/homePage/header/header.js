import React from 'react'
import '../header/header.css'
import logo from '../../../imgs/193171559_169250608475072_5253348756644639465_n.png'
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            logedIn: false
        }
    }
    render() {
        return (
            <div id='header' className='container-fluid'>
                <div id='left-header'>
                    <img id='logo' src={logo} alt='Logo'/>
                </div>

                  </div>
        )
    }
}
export default Header;