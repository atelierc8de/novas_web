import React, {Component} from 'react';
import {ImageSiderBar6, ImageSiderBar7, ImageSiderBar8, ImageSiderBar9} from '../components/ImageSiderBar.js';
import Arrowxemthem from '../icons/Arrowxemthem.svg';


export default class SiderBar3 extends Component {
    render(){
        return(
            <div style={{background: '#F4F7F9', paddingBottom: 60}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Giải pháp từ Novas</b></p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '84%' }}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar6 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 255, lineHeight: 1.3, height: 40, paddingTop: 12 }}>Giải pháp xử lý nước công nghiệp của hãng Rockwell Automation</span>
                            <span style={{ display: 'flex', paddingTop: 10 }}>
                                <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} ><b>XEM THÊM</b>
                                    <img src={Arrowxemthem} alt="arrowxemthem" style={{width: 5.6, height: 9, paddingLeft: 5}} />
                                </a>
                            </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar7 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 255, lineHeight: 1.3, height: 40, paddingTop: 12 }}>Giải pháp điều khiển tự động cho nhà máy xử lý vàng</span>
                            <span style={{ display: 'flex', paddingTop: 10 }}>
                                <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} ><b>XEM THÊM</b>
                                    <img src={Arrowxemthem} alt="arrowxemthem" style={{width: 5.6, height: 9, paddingLeft: 5}} />
                                </a>
                            </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar8 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 255, lineHeight: 1.3, height: 40, paddingTop: 12 }}>Giải pháp tối ưu hóa dành cho ngành sản xuất</span>
                            <span style={{ display: 'flex', paddingTop: 10 }}>
                                <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} ><b>XEM THÊM</b>
                                    <img src={Arrowxemthem} alt="arrowxemthem" style={{width: 5.6, height: 9, paddingLeft: 5}} />
                                </a>
                            </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar9 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 255, lineHeight: 1.3, height: 40, paddingTop: 12 }}>Giải pháp tiết kiệm năng lượng sử dụng biến tần</span>
                            <span style={{ display: 'flex', paddingTop: 10 }}>
                                <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 12, color: '#C81211' }} ><b>XEM THÊM</b>
                                    <img src={Arrowxemthem} alt="arrowxemthem" style={{width: 5.6, height: 9, paddingLeft: 5}} />
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}