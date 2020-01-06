import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import '../styles/horizontal.css';
import '../styles/style.css';
// import '../styles/slider-animations.css';

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
            // <div style={{ backgroundImage: `url(${Home1})`, width: '100%', height: 550, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', justifyContent: 'space-between', flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'row', textAlign: 'center' }}>
            //     <a href="http://localhost:3000/" ><img src={PrevBanner} alt="prevbanner" style={{width:22, height: 36, paddingLeft: 60}} /></a>

            //     <div style={{ display: 'flex', flexDirection: 'column' }}>
                    
            //     </div>

            //     <a href="http://localhost:3000/" ><img src={NextBanner} alt="nextbanner" style={{width:22, height: 36, paddingRight: 60}} /></a>
            // </div>
            <Slider className="slider-wrapper" style={{}}>
            {data.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
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