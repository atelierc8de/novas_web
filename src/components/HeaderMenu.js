import React, {Component} from 'react';
import English from '../icons/English.svg';
import '../styles/style.css';
import { Link } from 'react-router-dom'


export default class HeaderMenu extends Component {
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1, fontFamily: 'Roboto', fontSize: 14, height: 18, alignItems: 'center'}}>
                <Link to="/gioi-thieu" className="afterMenu">GIỚI THIỆU</Link>
                <Link to="/san-pham_dich-vu" className="afterMenu">SẢN PHẨM VÀ DỊCH VỤ</Link>
                <Link to="/du-an" className="afterMenu" >DỰ ÁN</Link>
                <Link to="/giai-phap" className="afterMenu" >GIẢI PHÁP</Link>
                <Link to="/tin-tuc" className="afterMenu" >TIN TỨC</Link>
                <Link to="/lien-he" className="afterMenu" >LIÊN HỆ</Link>
                <span style={{height: 18, border: '0.5px solid #CCCCCC'}}></span>
                <span style={{display: 'flex'}} >
                    <a href="http://localhost:3000/" style={{paddingRight: 6, display: 'flex', alignItems: 'center'}}>
                        <img src={English} alt="tabdefault" style={{width: 13, height: 13}} />
                    </a>
                    <Link to="/english" className="afterMenu" >English</Link>
                </span>
            </div>
        );
    }
}
