import React, { Component } from 'react';
import { LogoFooterNovas, LogoFaceBook } from '../components/ImageSiderBar.js';
import '../styles/FooterStyle.css';


export default class Footer extends Component {
    render() {
        return (
            <div style={{ width: '84%', display: 'flex' }}>
                <div style={{ display: 'flex', flex: 1 }}>
                    <LogoFooterNovas style={{}} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flex: 4, justifyContent: 'space-between', paddingRight: 30 }}>
                    <span style={{ fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF' }}>Địa chỉ: 120 Xô Viết Nghệ Tĩnh, Đà Nẵng</span>
                    <span style={{ height: 11, border: '0.5px solid #FFFFFF' }}></span>
                    <span style={{ fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF' }}>Điện thoại: 0236. 3736909</span>
                    <span style={{ height: 11, border: '0.5px solid #FFFFFF' }}></span>
                    <span style={{ fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF' }}>Fax: 0236 3736789</span>
                    <span style={{ height: 11, border: '0.5px solid #FFFFFF' }}></span>
                    <span style={{ fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF' }}>Email: contact@novas.com.vn</span>
                </div>
                <div style={{ display: 'flex', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 50, flex: 1 }}>
                        <LogoFaceBook />
                        <span style={{ height: 16, border: '0.5px solid #EEEEEE' }}></span>
                        <p style={{ fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF' }}>&copy; 2019 by Novas</p>
                    </div>
                </div>
            </div>
        );
    }
}