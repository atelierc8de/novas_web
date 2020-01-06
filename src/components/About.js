import React, { Component } from 'react';
import Arrowxemthem from '../icons/Arrowxemthem.svg';

export default class About extends Component {
    render() {
        return (
            <a href="http://localhost:3000/" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} ><b>XEM THÊM</b>
                <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 5 }} />
            </a>
        );
    }
}
