import React, { Component } from 'react';
import '../styles/style.css';
import Pullist from '../icons/pullist.svg';

export default class Diagram extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flex: 2.8, height: 800 }}>
                <div style={{ width: 1, height: '110%', backgroundColor: '#E6EAED' }} />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 59, paddingTop: 60 }}>
                    <span style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C' }}><b>Sơ đồ hoạt động</b></span>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', fontWeight: 600, paddingTop: 20 }}>Novas có tổng 120 nhân viên</span>
                        <span style={{paddingTop: 12}}>
                            <span style={{ display: 'flex', alignItems: 'center', lineHeight: 2 }}>
                                <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                                <span style={{ fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15 }}>40 kỹ sư</span>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', lineHeight: 2 }}>
                                <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                                <span style={{ fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15 }}>20 cử nhân</span>
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', lineHeight: 2 }}>
                                <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                                <span style={{ fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15 }}>60 công nhân</span>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>

        );
    }
}