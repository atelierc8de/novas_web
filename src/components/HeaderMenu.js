import React, {Component} from 'react';
import English from '../icons/English.svg';
import '../styles/style.css';
import {  NavLink } from 'react-router-dom'


export default class HeaderMenu extends Component {
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1, fontFamily: 'Roboto', fontSize: 14, height: 18, alignItems: 'center'}}>
                <NavLink to="/gioi-thieu/lich-su-novas" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu">GIỚI THIỆU</NavLink>
                <NavLink to="/san-pham_dich-vu" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu">SẢN PHẨM VÀ DỊCH VỤ</NavLink>
                <NavLink to="/du-an" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu" >DỰ ÁN</NavLink>
                <NavLink to="/giai-phap" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu" >GIẢI PHÁP</NavLink>
                <NavLink to="/tin-tuc" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu" >TIN TỨC</NavLink>
                <NavLink to="/lien-he" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu" >LIÊN HỆ</NavLink>
                <span style={{height: 18, border: '0.5px solid #CCCCCC'}}></span>
                <span style={{display: 'flex'}} >
                    <a href="http://localhost:3000/" style={{paddingRight: 6, display: 'flex', alignItems: 'center'}}>
                        <img src={English} alt="tabdefault" style={{width: 13, height: 13}} />
                    </a>
                    <NavLink to="/english" activeStyle={{color: '#C81211', fontWeight: 600}} className="afterMenu" >English</NavLink>
                </span>
            </div>
        );
    }
}
