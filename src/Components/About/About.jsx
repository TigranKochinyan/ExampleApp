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
                <h1>Hi my name is Tigran Kochinyan</h1>
            </div>

        </div>
    )
}  

export default About;