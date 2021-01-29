import React from 'react';
import './about.scss';

import myImage from './../../assets/img/tigo.jpeg';


const About = () => {
    return (
        <div className="about">
            <div className="about-image">
                <img src={myImage} alt="My image :)"/>
            </div>
            <div className="about-heading">
                <h1>I'm Tigran Kochinyan</h1>
                <h1>A front-end Developer</h1>
                <h1 className="about-heading-h1_grey">based in Armenia.</h1>
            </div>

        </div>
    )
}  

export default About;