import React, { memo } from 'react';
import './textAndImage.scss';

const TextAndImage = (props) => {
    
    
    return (
        <div className="textAndImage">
            <div className="textAndImage-text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <div className="textAndImage-text-social">
                    <a href="#">facebook</a>
                    <a href="#">github</a>
                    <a href="#">VK</a>
                    <a href="#">Instaram</a>
                </div>
            </div>
            <div className="textAndImage-image">
                {/* <img src={props.img} alt="image"/> */}
            </div>

        
        </div>
    );
};

export default memo(TextAndImage);
