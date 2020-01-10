import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SiderBarMain from '../container/SiderBarMain.js';
import Introduce from '../container/Introduce.js'

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={SiderBarMain} />
                <Route exact path="/gioi-thieu" component={Introduce} />
            </Switch>
        );
    }
}