import React from 'react';
import './portfolio.scss';

import PortfolioCard from './PortfolioCard'

const Portfolio = () => {

    return (
        <div className="portfolio-container row">
            <PortfolioCard title="CRM" desc="lorem ipsum dolor smit"/>
            <PortfolioCard title="CRM" desc="lorem ipsum dolor smit"/>
            <PortfolioCard title="CRM" desc="lorem ipsum dolor smit"/>
        </div>
    )
};

export default Portfolio;