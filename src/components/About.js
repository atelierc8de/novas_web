import React from 'react';
import Arrowxemthem from '../icons/Arrowxemthem.svg';
import '../styles/style.css';
import {  NavLink } from 'react-router-dom'


const SeeMore = ({ className="partner" }) => {
    return  <NavLink to="/gioi-thieu/lich-su-novas" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} className={className} ><b>XEM THÊM</b>
                <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 8 }} />
            </NavLink>
}

const SeeEverything = ({className="partner"}) => {
    return  <NavLink to="/san-pham_dich-vu" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 13, color: '#C81211' }} className={className} ><b>XEM TẤT CẢ</b>
                <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 8 }} />
            </NavLink>
}

            
export{SeeMore, SeeEverything}