import React, {Component} from 'react';
import English from '../icons/English.svg';
import '../styles/style.css';


export default class HeaderMenu extends Component {
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1, fontFamily: 'Roboto', fontSize: 14, height: 18, alignItems: 'center'}}>
                <a href="http://localhost:3000/" className="afterMenu">GIỚI THIỆU</a>
                <a href="http://localhost:3000/" className="afterMenu">SẢN PHẨM VÀ DỊCH VỤ</a>
                <a href="http://localhost:3000/" className="afterMenu" >DỰ ÁN</a>
                <a href="http://localhost:3000/" className="afterMenu" >GIẢI PHÁP</a>
                <a href="http://localhost:3000/" className="afterMenu" >TIN TỨC</a>
                <a href="http://localhost:3000/" className="afterMenu" >LIÊN HỆ</a>
                <span style={{height: 18, border: '0.5px solid #CCCCCC'}}></span>
                <span style={{display: 'flex'}} >
                    <a href="http://localhost:3000/" style={{paddingRight: 6, display: 'flex', alignItems: 'center'}}>
                        <img src={English} alt="tabdefault" style={{width: 13, height: 13}} />
                    </a>
                    <a href="http://localhost:3000/" className="afterMenu" >English</a>
                </span>
            </div>
        );
    }
}
