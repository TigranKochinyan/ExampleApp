import React from 'react';
import './footer.scss';

const Footer = (props) => {
    return (
        <footer className="footer container-fluid">
            <div className="row">
                <div className="col m4 s6">
                    <h4>Social Link</h4>
                    <ul>
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">VK</a>
                        </li>
                    </ul>
                </div>
                <div className="col m4 s6">
                    <h4>Pages</h4>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Me</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="col m4 s12">
                    <h4>Contact me</h4>
                    <ul>
                        <li><a href="tel:+374-93-550-242">+374 93 550 242</a></li>
                        <li><a href="mailto:tigrankochinyan24@gmail.com">tigrankochinyan24@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
};

export default Footer;