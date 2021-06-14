import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import myImage from './../../assets/img/tigo.jpeg';

const Header = () => {
    let mySelect = useRef(null);
    useEffect(
        () => {
            let elem = mySelect.current;
            M.Sidenav.init(elem, { edge: 'right', inDuration: 200, outDuration: 200 });
        }
        , []
    );
    return (
        <div className="container-fluid header">
            <div className="row">
                <nav>
                    <div className="nav-wrapper grey darken-3">
                        <a href="#" className="brand-logo">Tigran Kochinyan</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">About</a></li>
                            <li><a href="badges.html">Portfolio</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" ref={mySelect} className="sidenav">
                    <li>
                        <div className="user-view">
                            {/* <div className="background">
                                <img src={myImage} />
                            </div> */}
                            <a href="#user"><img className="circle sidenav_image" src={myImage} /></a>
                            <a href="#name"><span className="white-text name">Tigran Kochinyan</span></a>
                            <a href="#email"><span className="white-text email">tigrankochinyan24@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!" className="waves-effect sidenav_link"><i className="material-icons sidenav_icon">apps</i>Portfolio</a></li>
                    <li><a href="#!" className="waves-effect sidenav_link"><i className="material-icons sidenav_icon">assignment</i>About Me</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Social links</a></li>
                    <li><a className="waves-effect sidenav_link" href="#!">Facebook</a></li>
                    <li><a className="waves-effect sidenav_link" href="#!">LinkedIn</a></li>
                    <li><a className="waves-effect sidenav_link" href="#!">VK</a></li>
                    <li><a className="waves-effect sidenav_link" href="#!">Instagram</a></li>
                </ul>
                {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                <a href="#" data-target="slide-out" className="sidenav-trigger" ><i className="material-icons ">menu</i></a>
            </div>
        </div>
    )
}

export default Header;