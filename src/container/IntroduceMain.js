import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../components/Overview.js';
import HistoryNovas from '../components/HistoryNovas.js';
import Certificate from '../components/Certificate.js';
import Diagram from '../components/Diagram.js';


export default ({ match }) =>  {
    console.log({match})
        return(
            <Switch>
                {/* <Certificate /> */}
                {/* <Redirect to="/gioi-thieu/chung-chi-hop-tac" component={Certificate} /> */}
                <Route exact path={match.path} component={Overview} />
                <Route path={`${match.path}/tong-quan`} component={Overview} />
                <Route path={`${match.path}/lich-su-novas`} component={HistoryNovas} />
                <Route path={`${match.path}/so-do-hoat-dong`} component={Diagram} />
                <Route path={`${match.path}/chung-chi-hop-tac`} component={Certificate} />
            </Switch>
        );
}