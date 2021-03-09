import React from 'react';
import './portfolioItem.scss';

const PortfolioItem = (props) => {
    return (
        <div className="portfolioItem">
            <img src="https://images.pexels.com/photos/5345029/pexels-photo-5345029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <h4>portfolio Title (name)</h4>
            <p>portfolio type</p>
        </div>
    );
};


export default PortfolioItem;