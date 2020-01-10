import React, {Component} from 'react';
import LogoTop from '../icons/LogoTop.svg';
import { Link } from 'react-router-dom';

export default class HeaderLogo extends Component {
    render(){
        return(
            <Link to="/" style={{}}>
              <img src={LogoTop} alt="LogoTop" style={{width: 131, height: 52}} />
            </Link>
        );
    }
}