import React, {Component} from 'react';
import English from '../icons/English.svg';


export default class HeaderMenu extends Component {
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1, fontFamily: 'Roboto', fontSize: 14, height: 18, alignItems: 'center'}}>
                <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>GIỚI THIỆU</a>
                <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>SẢN PHẨM VÀ DỊCH VỤ</a>
                <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>GIẢI PHÁP</a>
                <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>DỰ ÁN</a>
                <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>TIN TỨC</a>
                <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>LIÊN HỆ</a>
                <span style={{height: 18, border: '0.5px solid #CCCCCC'}}></span>
                <div style={{display: 'flex'}}>
                    <a href="#" style={{paddingRight: 6, display: 'flex', alignItems: 'center'}}>
                        <img src={English} alt="tabdefault" style={{width: 13, height: 13}} />
                    </a>
                    <a href="#" style={{textDecoration: 'none', color: '#4A4A4A'}}>English</a>
                </div>
            </div>
        );
    }
}
