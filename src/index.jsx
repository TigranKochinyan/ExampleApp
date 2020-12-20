import React from 'react';
import { render } from 'react-dom';

import Cards from './Components/Cards';
import './assets/main.css';

const App = () => {
    return (
        <div>
            <h1>React app</h1>
            <Cards />
        </div>
    )
}

render(<App/>, document.getElementById('app'));

