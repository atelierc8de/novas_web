import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SiderBarMain from '../container/SiderBarMain.js';
import Introduce from '../container/Introduce.js';
import ProductService from '../components/ProductService.js';
import Project from '../components/Project.js';
import Solution from '../components/Solution.js';
import TechNews from '../components/TechNews.js';
import PartnerURL from '../components/PartnerURL.js';
import Customer from '../components/Customer.js';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={SiderBarMain} />
                <Route path="/gioi-thieu" component={Introduce} />
                <Route exact path="/san-pham_dich-vu" component={ProductService} />
                <Route exact path="/du-an" component={Project} />
                <Route exact path="/giai-phap" component={Solution} />
                <Route exact path="/tin-tuc" component={TechNews} />
                <Route exact path="/doi-tac" component={PartnerURL} />
                <Route exact path="/khach-hang" component={Customer} />
            </Switch>
        );
    }
}