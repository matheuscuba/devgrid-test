import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CacheRoute, {CacheSwitch} from 'react-router-cache-route';
import {MyLibrary, Report, ReadBooks} from './pages';

import Wrapper from './components/Wrapper';
import Nav from './components/Nav';

import './assets/sass/main.scss';

function App() {
    return (
        <Wrapper>
            <Router>
                <Nav />
                <CacheSwitch>
                    <CacheRoute exact path="/report" component={Report} />
                    <Route exact path="/read-books" component={ReadBooks} />
                    <Route path="/" component={MyLibrary} />
                </CacheSwitch>
            </Router>
        </Wrapper>
    );
}

export default App;
