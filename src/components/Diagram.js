import React, { Component } from 'react';
import '../styles/style.css';

export default class Diagram extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flex: 2.8, height: 1000 }}>
                <div style={{ width: 1, height: '108%', backgroundColor: '#E6EAED' }} />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 59, paddingTop: 60 }}>
                    <span style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C' }}><b>Sơ đồ hoạt động</b></span>
                    <div style={{height: 900, display: 'flex'}}>
                        
                    </div>
                </div>
            </div>

        );
    }
}