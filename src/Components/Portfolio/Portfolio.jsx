import React, { memo } from 'react';
import './portfolio.scss';


import PortfolioItem from './PortfolioItem';

const Portfolio = () => {

    return (
        <div className="portfolio">
            <h3>Prtfolio</h3>
            <div className="portfolio-buttons">
                <button>All</button>
                <button>Packaging</button>
                <button>Mockup</button>
                <button>Typography</button>
                <button>Photography</button>
            </div>
            <div className="row">
                <div className="col l4 m6 s12">
                    <PortfolioItem/>
                </div>
                <div className="col l4 m6 s12">
                    <PortfolioItem/>
                </div>
                <div className="col l4 m6 s12">
                    <PortfolioItem/>
                </div>

            </div>
        </div>
    )
}

export default memo(Portfolio);

//Portfolio should takes the objects in array and render cards with map