import React, { Component } from 'react';
import { ImageSiderBar3, ImageSiderBar4, ImageSiderBar5 } from '../components/ImageSiderBar.js';
import Location from '../icons/location.svg';
import Arrowxemthem from '../icons/Arrowxemthem.svg';

const data = [

    {
        title: 'Nhà máy xử lý nước và nước thải Đà Nẵng Beach Resort, Veolia Việt Nam',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        title: 'Dự án cấp nước Lam Sơn – Sao Vàng, Veolia Việt Nam',
        location: 'Thanh Hóa, Việt Nam'
    },
    {
        title: 'Cải thiện giao thông đô thị thành phố Đà Nẵng do tổ chức JICA tài trợ',
        location: 'Đà Nẵng, Việt Nam'
    },
]

export default class SiderBar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
        }
    }
    render() {
        const { data } = this.state;
        console.log(123, data)
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '94%' }}>
                        <div style={{}}>
                            <ImageSiderBar3 style={{}} />
                            <p style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, height: 20 }}>Nhà máy xử lý nước và nước thải Đà Nẵng Beach Resort, Veolia Việt Nam</p>
                            <span style={{ height: 20, display: 'flex', alignContent: 'center', paddingTop: 10 }}>
                                <img src={Location} alt="location" style={{ width: 9.1, height: 11.8 }} />
                                <span style={{ fontFamily: 'Roboto', fontSize: 13, color: '#4A4A4A', paddingLeft: 10.9 }}>Đà Nẵng, Việt Nam</span>
                            </span>
                        </div>
                        <div style={{}}>
                            <ImageSiderBar4 style={{}} />
                            <p style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, height: 20 }}>Dự án cấp nước Lam Sơn – Sao Vàng, Veolia Việt Nam</p>
                            <span style={{ height: 20, display: 'flex', alignContent: 'center', paddingTop: 10 }}>
                                <img src={Location} alt="location" style={{ width: 9.1, height: 11.8 }} />
                                <span style={{ fontFamily: 'Roboto', fontSize: 13, color: '#4A4A4A', paddingLeft: 10.9 }}>Thanh Hóa, Việt Nam</span>
                            </span>
                        </div>
                        <div style={{}}>
                            <ImageSiderBar5 style={{}} />
                            <p style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, height: 20 }}>Cải thiện giao thông đô thị thành phố Đà Nẵng do tổ chức JICA tài trợ</p>
                            <span style={{ height: 20, display: 'flex', alignContent: 'center', paddingTop: 10 }}>
                                <img src={Location} alt="location" style={{ width: 9.1, height: 11.8 }} />
                                <span style={{ fontFamily: 'Roboto', fontSize: 13, color: '#4A4A4A', paddingLeft: 10.9 }}>Đà Nẵng, Việt Nam</span>
                            </span>
                        </div>
                    </div>

                </div>
                <span style={{ display: 'flex', justifyContent: 'center', lineHeight: 3 }}>
                    <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 13, color: '#C81211', lineHeight: 5 }} ><b>XEM TẤT CẢ</b>
                    <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 5 }} />
                </a></span>
            </div>
        );
    }
}