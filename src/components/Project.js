import React, { Component } from 'react';
import BannerProject from '../components/BannerProject.js';
import '../styles/siderbar.css';
import Location from '../icons/location.svg';

const data = [
    {
        image: require('../images/duan1.png'),
        title: 'Nhà máy xử lý nước và nước thải Đà Nẵng Beach Resort, Veolia Việt Nam',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan2.png'),
        title: 'Dự án cấp nước Lam Sơn – Sao Vàng, Veolia Việt Nam',
        location: 'Thanh Hóa, Việt Nam'
    },
    {
        image: require('../images/duan3.png'),
        title: 'Cải thiện giao thông đô thị thành phố Đà Nẵng do tổ chức JICA tài trợ',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan4.png'),
        title: 'Lắp đặt phần điện và điều khiển cho 08 kho bù gạch Nhà máy gạch Prime Đại Lộc - SCG Thái Lan',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan5.png'),
        title: 'Thiết kế hệ thống ITS cho dự án xe buýt nhanh (BRT) thành phố Đà Nẵng',
        location: 'Thanh Hóa, Việt Nam'
    },
    {
        image: require('../images/duan6.png'),
        title: 'Xử lý đất nhiễm Dioxin bằng nhiệt tại sân bay Đà Nẵng, Việt Nam',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan7.png'),
        title: 'Nâng cấp hệ thống điều khiển lò hơi COB H-1503 Lọc dầu Bình Sơn (BSR)',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan8.png'),
        title: 'Thi công cơ điện (M&E) Nhà máy sản xuất tụ điện Hydra - Quảng Nam',
        location: 'Thanh Hóa, Việt Nam'
    },
    {
        image: require('../images/duan9.png'),
        title: 'Tích hợp hệ thống điều khiển và Giám sát Scada - Dawaco',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan10.png'),
        title: 'Xây dựng phòng điều khiển trung tâm Scada cho các trạm bơm nước thải - TP Đà Nẵng',
        location: 'Đà Nẵng, Việt Nam'
    },
    {
        image: require('../images/duan11.png'),
        title: 'Xây dựng hệ thống điều khiển cho trạm bơm chống ngập - TP Đà Nẵng',
        location: 'Thanh Hóa, Việt Nam'
    },
    {
        image: require('../images/duan12.png'),
        title: 'Tích hợp hệ thống điều khiển Scada và hệ thống điện cho nhà máy khai thác vàng Bồng Miêu...',
        location: 'Đà Nẵng, Việt Nam'
    },
]

export default class Project extends Component {

    state = {
        data,
    }
    render() {

        const { data } = this.state

        return (
            <div style={{ paddingBottom: 80 }}>
                <BannerProject />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '84%', display: 'flex', flexDirection: 'column' }}>
                        <div className="project-wrapper">
                            <div className="project-content">
                                {data.map((item, index) =>
                                    <div className="project" key={index} >
                                        <img src={item.image} className="project-image" alt="imagesss" />
                                        <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 12 }}><b>{item.title}</b></span>
                                        <span style={{ display: 'flex', alignContent: 'center', paddingTop: 10 }}>
                                            <img src={Location} alt="location" style={{ width: 9.1, height: 11.8 }} />
                                            <span style={{ fontFamily: 'Roboto', fontSize: 13, color: '#4A4A4A', paddingLeft: 10.9 }}>{item.location}</span>
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}