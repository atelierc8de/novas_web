import React, { Component } from 'react';
import Home1 from '../images/home1.png';
import NextBanner from '../icons/nextbanner.svg';
import PrevBanner from '../icons/prevbanner.svg';

export default class Banner extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${Home1})`, width: '100%', height: 550, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', justifyContent: 'space-between', flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'row', textAlign: 'center' }}>
                
                <a href="#" ><img src={PrevBanner} alt="prevbanner" style={{width:22, height: 36, paddingLeft: 60}} /></a>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Roboto', fontSize: 44, color: '#FFFFFF', textShadow: '0px 2px 2px #000000', lineHeight: 1.5 }}><b>Giải pháp quản lý toà nhà (BMS)</b></span>
                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#FFFFFF', lineHeight: 1.5 }}>TÍCH HỢP, ĐIỀU KHIỂN, GIÁM SÁT VÀ PHỐI HỢP CÁC HỆ THỐNG CƠ - ĐIỆN TRONG TOÀ NHÀ</span>
                </div>

                <a href="#" ><img src={NextBanner} alt="nextbanner" style={{width:22, height: 36, paddingRight: 60}} /></a>

            </div>
        );
    }
}