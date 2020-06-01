import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MyLibrary, Report, ReadBooks} from './pages';

import Wrapper from './components/Wrapper';
import Nav from './components/Nav';

import './assets/sass/main.scss';

function App() {
    return (
        <Wrapper>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/report" component={Report} />
                    <Route exact path="/read-books" component={ReadBooks} />
                    <Route path="/" component={MyLibrary} />
                </Switch>
            </Router>
        </Wrapper>
    );
}

export default App;
