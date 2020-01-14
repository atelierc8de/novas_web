import React, { Component } from 'react';
import Location from '../icons/location.svg';
import {SeeEverythingProject} from '../components/About.js';
import '../styles/siderbar.css'


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
            <div style={{paddingBottom: 40}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Dự án nổi bật</b></p>
                </div>
                <div className="siderbar2-wrapper">
                    <div className="siderbar2-content">
                        {data.map((item, index) =>
                            <div className="siderbar2" key={index} >
                                <img src={item.image} alt="imagesss" className="siderbar2-image" />
                                <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 12, height: 40 }}>{item.title}</span>
                                <span style={{ display: 'flex', alignContent: 'center', paddingTop: 10 }}>
                                    <img src={Location} alt="location" style={{ width: 9.1, height: 11.8 }} />
                                    <span style={{ fontFamily: 'Roboto', fontSize: 13, color: '#4A4A4A', paddingLeft: 10.9 }}>{item.location}</span>
                                </span>
                            </div>
                        )}
                    </div>

                </div>
                <span style={{ display: 'flex', justifyContent: 'center', paddingTop: 30 }}>
                    <SeeEverythingProject />
                </span>
            </div>
        );
    }
}