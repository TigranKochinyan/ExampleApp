import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import myImage from './../../assets/img/tigo.jpeg';

const Header = () => {
    let mySelect = useRef(null);
    useEffect(
        () => {
            let elem = mySelect.current;
            M.Sidenav.init(elem);
        }
        , []
    );
    return (
        <div className="container-fluid header">
            <div className="row">
                <nav>
                    <div className="nav-wrapper grey darken-3">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" ref={mySelect} className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={myImage} />
                            </div>
                            <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </div>
    )
}

export default Header;