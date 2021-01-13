import React from 'react';
import { render } from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import Home from './Components/Home';
import './assets/main.scss';

const App = () => {
    M.AutoInit();//meybe is not required
    return (
        <div>
            <Home />
        </div>
    )
}

render(<App/>, document.getElementById('app'));

