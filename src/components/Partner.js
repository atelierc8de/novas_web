import React, { Component } from 'react';
import { LogoBnb, LogoEbay, LogoStripe, LogoCapital, LogoImb, LogoPrudential, LogoZappos, LogoSales, LogoAmazon } from '../components/ImageSiderBar.js';
import '../styles/SiderBar.css';
import '../styles/style.css';
import {SeeEverything} from '../components/About.js';

export default class Partner extends Component {
    render() {
        return (
            <div style={{ background: '#F4F7F9', paddingBottom: 50, display: 'flex', justifyContent: 'center', paddingTop: 25 }}>
                <div style={{ width: '84%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 25 }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: '#2C2C2C' }}>ĐỐI TÁC TIN CẬY</span>
                        <span style={{}}>
                            <SeeEverything style={{}} />
                        </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 25 }} >
                        <LogoBnb style={{}} />
                        <LogoEbay style={{}} />
                        <LogoStripe style={{}} />
                        <LogoCapital style={{}} />
                        <LogoImb style={{}} />
                        <LogoPrudential style={{}} />
                    </div>

                    <div style={{ height: 1, marginTop: 40, marginBottom: 15 }} className="gradient" />

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 25 }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: '#2C2C2C' }}>KHÁCH HÀNG THÂN THIẾT</span>
                        <span style={{}}>
                            <SeeEverything style={{}} />
                        </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 25 }}>
                        <LogoZappos style={{}} />
                        <LogoSales style={{}} />
                        <LogoCapital style={{}} />
                        <LogoCapital style={{}} />
                        <LogoImb style={{}} />
                        <LogoAmazon style={{}} />
                    </div>
                </div>
            </div>
        );
    }
}