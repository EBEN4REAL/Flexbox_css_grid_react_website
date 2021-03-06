 import React , {Component} from 'react';
 import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';

// library.add(faFacebook)

 class Header extends Component {
    
     render(){
         return  (
            <header>
                <nav>
                    <div className="nav-container">
                        <img src="http://pluspng.com/img-png/best-quality-png-download-best-quality-png-images-transparent-gallery-advertisement-1024.png" alt="img" />
                        <div className="btn">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#"> About us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Book Online </a></li>
                    </ul>
                </nav>
                <div className="banner">
                    <div className="banner-center">
                        <img src="http://pluspng.com/img-png/best-quality-png-download-best-quality-png-images-transparent-gallery-advertisement-1024.png" alt="img" />
                        <h1>Company <span className="and"> & </span>co</h1>
                        <h3>Car shop for fanatics</h3>
                        <div className="banner-icons">
                        <SocialMediaIcons
                            icons={socialMediaIcons}
                            iconSize={'1.3em'}
                            iconColor={'#495056'}
                        />
                            {/* <FontAwesomeIcon icon="igloo" /> */}
                             {/* <a href=""><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a> */}
                            {/* <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""><i class="fab fa-pinterest"></i></a>  */}
                        </div>
                    </div>
                </div>
        </header>
         )
     }

 }

 export default Header;