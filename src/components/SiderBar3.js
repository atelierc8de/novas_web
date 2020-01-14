import React, {Component} from 'react';
import {SeeMoreCertificate} from '../components/About.js';
import '../styles/siderbar.css';

const data = [
    {
        title: 'Giải pháp xử lý nước công nghiệp của hãng Rockwell Automation',
        image: require('../images/home7.png')
    },
    {
        title: 'Giải pháp điều khiển tự động cho nhà máy xử lý vàng',
        image: require('../images/home8.png')
    },
    {
        title: 'Giải pháp tối ưu hóa dành cho ngành sản xuất',
        image: require('../images/home9.png')
    },
    {
        title: 'Giải pháp tiết kiệm năng lượng sử dụng biến tần',
        image: require('../images/home10.png')
    },
]

export default class SiderBar3 extends Component {

    state = {
        data,
    }

    render(){

        const {data} = this.state;

        return(
            <div style={{background: '#F4F7F9', paddingBottom: 60}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Giải pháp từ Novas</b></p>
                </div>
                <div className="siderbar3-wrapper">
                    <div className="siderbar3-content">
                        {data.map((item, index) => 
                            <div className="siderbar3" key={index} >
                                <img src={item.image} style={{width: 255 , height: 170}} alt="imagesss" />
                                <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 255, lineHeight: 1.3, height: 40, paddingTop: 12 }}>{item.title}</span>
                                <span className="siderbar-seemore">
                                    <SeeMoreCertificate />
                                </span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}