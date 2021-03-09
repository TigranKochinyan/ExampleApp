import React from 'react';
import './about.scss';

import myImage from './../../assets/img/tigo.jpeg';
import myImage2 from './../../assets/img/pexels-wallace-chuck-3749989.jpg';



const About = () => {
    return (
        <div className="about">
            <div className="about-image">
                {/* <img src={myImage2} alt="My image :)"/> */}
                <h1>I'm Tigran Kochinyan</h1>
                <h1>A front-end Developer</h1>
                <h1 className="about-heading-h1_grey">based in Armenia.</h1>
            </div>
            {/* <div className="about-heading">
                <h1>I'm Tigran Kochinyan</h1>
                <h1>A front-end Developer</h1>
                <h1 className="about-heading-h1_grey">based in Armenia.</h1>
            </div> */}

        </div>
    )
}  

export default About;