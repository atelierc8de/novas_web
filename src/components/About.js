import React from 'react';
import Arrowxemthem from '../icons/Arrowxemthem.svg';
import '../styles/style.css';


const SeeMore = ({ className="partner" }) => {
    return  <a href="http://localhost:3000/" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} className={className} ><b>XEM THÊM</b>
                <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 8 }} />
            </a>
}

const SeeEverything = ({className="partner"}) => {
    return  <a href="http://localhost:3000/" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 13, color: '#C81211' }} className={className} ><b>XEM TẤT CẢ</b>
                <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 8 }} />
            </a>
}

            
export{SeeMore, SeeEverything}