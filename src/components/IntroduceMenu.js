import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Tabactive from '../icons/tabactive.svg';
import Tabdefault from '../icons/tabdefault.svg';


export default class IntroduceMenu extends Component {

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{lineHeight: 3}}>
                    <img src={Tabactive} alt="tabactive" style={{width: 9.9, height: 9.9}} />
                    <NavLink to="/gioi-thieu/tong-quan" activeStyle={{color: '#C81211', fontWeight: 600}} style={{fontFamily: 'Roboto', fontSize: 15, color: '#2C2C2C', textDecoration: 'none', paddingLeft: 17.5 }}>Tổng quan</NavLink>
                </span>
                <span style={{width: '120%', height: 1, backgroundColor: '#E6EAED'}} />
                <span style={{lineHeight: 3}}>
                    <img src={Tabdefault} alt="tabdefault" style={{width: 9.9, height: 9.9}} />
                    <NavLink to="/gioi-thieu/lich-su-novas" activeStyle={{color: '#C81211', fontWeight: 600}} style={{fontFamily: 'Roboto', fontSize: 15, color: '#2C2C2C', textDecoration: 'none', paddingLeft: 17.5 }}>Lịch sử Novas</NavLink>
                </span>
                <span style={{width: '120%', height: 1, backgroundColor: '#E6EAED'}} />
                <span style={{lineHeight: 3}}>
                    <img src={Tabdefault} alt="tabdefault" style={{width: 9.9, height: 9.9}} />
                    <NavLink to="/gioi-thieu/so-do-hoat-dong" activeStyle={{color: '#C81211', fontWeight: 600}} style={{fontFamily: 'Roboto', fontSize: 15, color: '#2C2C2C', textDecoration: 'none', paddingLeft: 17.5 }}>Sơ đồ hoạt động</NavLink>
                </span>
                <span style={{width: '120%', height: 1, backgroundColor: '#E6EAED'}} />
                <span style={{lineHeight: 3}}>
                    <img src={Tabdefault} alt="tabdefault" style={{width: 9.9, height: 9.9}} />
                    <NavLink to="/gioi-thieu/chung-chi-hop-tac" activeStyle={{color: '#C81211', fontWeight: 600}} style={{fontFamily: 'Roboto', fontSize: 15, color: '#2C2C2C', textDecoration: 'none', paddingLeft: 17.5 }}>Chứng chỉ hợp tác</NavLink>
                </span>
            </div>
        );
    }
}