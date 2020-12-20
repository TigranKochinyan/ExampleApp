import React from 'react';
import { Example } from './Example/Example.jsx';


import './Example/style.scss';


const Home = (props) => {
    return (
        <div>
            <h2>Home page {props.x}
             {props.y}
            </h2>
            <div className="paragraph-div">
                <p>scss styled component</p>
            </div>
            <Example />
            <h1>barevvvvvv</h1>
        </div>
        
    )
}


export { Home };