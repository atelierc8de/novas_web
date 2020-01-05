import React, { Component } from 'react';
import Location from '../icons/location.svg';
import Arrowxemthem from '../icons/Arrowxemthem.svg';


const data = [

    {
        title: 'Nhà máy xử lý nước và nước thải Đà Nẵng Beach Resort, Veolia Việt Nam',
        location: 'Đà Nẵng, Việt Nam',
        image: require('../images/home4.png')
    },
    {
        title: 'Dự án cấp nước Lam Sơn – Sao Vàng, Veolia Việt Nam',
        location: 'Thanh Hóa, Việt Nam',
        image: require('../images/home5.png')
    },
    {
        title: 'Cải thiện giao thông đô thị thành phố Đà Nẵng do tổ chức JICA tài trợ',
        location: 'Đà Nẵng, Việt Nam',
        image: require('../images/home6.png')
    },
]

export default class SiderBar2 extends Component {
    state = {
        data,
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Dự án nổi bật</b></p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '84%' }}>
                        {data.map((item) => 
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                            <img src={item.image} alt="imagesss" style={{width: 353 , height: 250}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 12, height: 40 }}>{item.title}</span>
                            <span style={{ display: 'flex', alignContent: 'center', paddingTop: 10 }}>
                                <img src={Location} alt="location" style={{ width: 9.1, height: 11.8 }} />
                                <span style={{ fontFamily: 'Roboto', fontSize: 13, color: '#4A4A4A', paddingLeft: 10.9 }}>{item.location}</span>
                            </span>
                        </div>
                        )}
                    </div>

                </div>
                <span style={{ display: 'flex', justifyContent: 'center', lineHeight: 3, paddingTop: 15 }}>
                    <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 13, color: '#C81211', lineHeight: 5 }} ><b>XEM TẤT CẢ</b>
                        <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 5 }} />
                    </a>
                </span>
            </div>
        );
    }
}