import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import '../styles/horizontal.css';
import '../styles/style.css';

const data = [
    {
        image: require('../images/home1.png'),
        title: 'Giải pháp quản lý toà nhà (BMS)',
        description: 'TÍCH HỢP, ĐIỀU KHIỂN, GIÁM SÁT VÀ PHỐI HỢP CÁC HỆ THỐNG CƠ - ĐIỆN TRONG TOÀ NHÀ'
    },
    {
        image: require('../images/c1.png'),
        title: 'Giải pháp quản lý toà nhà (BMS)',
        description: 'TÍCH HỢP, ĐIỀU KHIỂN, GIÁM SÁT VÀ PHỐI HỢP CÁC HỆ THỐNG CƠ - ĐIỆN TRONG TOÀ NHÀ'
    },
    {
        image: require('../images/SPvaDV.png'),
        title: 'Giải pháp quản lý toà nhà (BMS)',
        description: 'TÍCH HỢP, ĐIỀU KHIỂN, GIÁM SÁT VÀ PHỐI HỢP CÁC HỆ THỐNG CƠ - ĐIỆN TRONG TOÀ NHÀ'
    },
]

export default class Banner extends Component {
    state = {
        data
    }

    render() {
        const {data} = this.state

        return (
            <Slider className="slider-wrapper" style={{}} autoplay={3000} >
            {data.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: 'cover' }}
              >
                <div className="inner" style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{ fontFamily: 'Roboto', fontSize: 44, color: '#FFFFFF', textShadow: '0px 2px 2px #000000', lineHeight: 1.5 }}><b>{item.title}</b></span>
                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#FFFFFF', lineHeight: 1.5 }}>{item.description}</span>
                </div>
              </div>
            ))}
          </Slider>
        );
    }
}