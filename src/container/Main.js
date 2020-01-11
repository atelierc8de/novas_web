import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SiderBarMain from '../container/SiderBarMain.js';
import Introduce from '../container/Introduce.js';
import ProductService from '../components/ProductService.js';
import Project from '../components/Project.js';
import Solution from '../components/Solution.js';
import TechNews from '../components/TechNews.js';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={SiderBarMain} />
                <Route exact path="/gioi-thieu/lich-su-novas" component={Introduce} />
                <Route exact path="/san-pham_dich-vu" component={ProductService} />
                <Route exact path="/du-an" component={Project} />
                <Route exact path="/giai-phap" component={Solution} />
                <Route exact path="/tin-tuc" component={TechNews} />
            </Switch>
        );
    }
}