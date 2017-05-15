import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import App from './LoginPage.js';
import CallbackPage from './CallbackPage.js';
import NotFoundPage from './NotFoundPage.js';

class Root extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Redirect from="/home" to="/" />
                    <Route path="/callback" component={CallbackPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
