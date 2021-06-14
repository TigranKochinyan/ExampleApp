import React from 'react';
import './portfolioCard.scss';

import Tag from './Tag';

const PortfolioCard = (props) => {

    return (
        <div className="col l4 m6 s12">
            <div className="portfolio-card">
                <img src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Что то с чем то" />
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <div className="portfolio-card_tags">
                    <Tag tag="vue"/>
                    <Tag tag="react"/>
                    <Tag tag="materialize-css"/>
                </div>

                <a href={`#`}>see more</a>
            </div>
        </div>
    )
};

export default PortfolioCard;