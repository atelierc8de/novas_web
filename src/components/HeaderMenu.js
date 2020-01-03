import React, {Component} from 'react';
import English from '../icons/English.svg';


export default class HeaderMenu extends Component {
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', fontFamily: 'Roboto', fontSize: 14, height: 18, alignItems: 'center'}}>
                <a href="#" style={{textDecoration: 'none'}}>GIỚI THIỆU</a>
                <a href="#" style={{textDecoration: 'none'}}>SẢN PHẨM VÀ DỊCH VỤ</a>
                <a href="#" style={{textDecoration: 'none'}}>GIẢI PHÁP</a>
                <a href="#" style={{textDecoration: 'none'}}>DỰ ÁN</a>
                <a href="#" style={{textDecoration: 'none'}}>TIN TỨC</a>
                <a href="#" style={{textDecoration: 'none'}}>LIÊN HỆ</a>
                <span style={{height: 18, color: 'black', border: '0.5px solid gray'}}></span>
                <div style={{display: 'flex'}}>
                    <a href="#" style={{paddingRight: 6, display: 'flex', alignItems: 'center'}}>
                        <img src={English} alt="tabdefault" style={{width: 13, height: 13}} />
                    </a>
                    <a href="#" style={{textDecoration: 'none'}}>English</a>
                </div>
            </div>
        );
    }
}
