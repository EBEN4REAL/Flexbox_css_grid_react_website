 import React , {Component} from 'react';

 class Header extends Component {

     render(){
         return  (
                    <header>
                        <nav>
                            <div class="nav-container">
                                <img src="http://pluspng.com/img-png/best-quality-png-download-best-quality-png-images-transparent-gallery-advertisement-1024.png" alt="img" />
                                <div class="btn">
                                    <div class="bar"></div>
                                    <div class="bar"></div>
                                    <div class="bar"></div>
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
                        <div class="banner">
                            <div class="banner-center">
                                <img src="http://pluspng.com/img-png/best-quality-png-download-best-quality-png-images-transparent-gallery-advertisement-1024.png" alt="img" />
                                <h1>Company <span class="and"> & </span>co</h1>
                                <h3>Car shop for fanatics</h3>
                                <div class="banner-icons">
                                    <a href=""><i class="fab fa-facebook"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                </header>
         )
     }

 }

 export default Header;