import React, {Component} from 'react';
import LogoTop from '../icons/LogoTop.svg';

export default class HeaderLogo extends Component {
    render(){
        return(
            <a href="#" style={{}}>
              <img src={LogoTop} alt="LogoTop" style={{width: 131, height: 52}} />
            </a>
        );
    }
}