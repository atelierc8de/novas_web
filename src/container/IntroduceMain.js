import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../components/Overview.js';
import HistoryNovas from '../components/HistoryNovas.js';


export default class ImtroduceMain extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/gioi-thieu/tong-quan" component={Overview} />
                <Route exact path="/gioi-thieu/lich-su-novas" component={HistoryNovas} />
            </Switch>
        );
    }
}