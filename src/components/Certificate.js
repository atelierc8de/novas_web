import React, { Component } from 'react';
import '../styles/style.css';
import '../styles/siderbar.css';

const data = [
    {
        image: require('../images/chungchi1.png')
    },
    {
        image: require('../images/chungchi2.png')
    },
    {
        image: require('../images/chungchi3.png')
    },
    {
        image: require('../images/chungchi4.png')
    },
    {
        image: require('../images/chungchi5.png')
    },
    {
        image: require('../images/chungchi6.png')
    },
]

export default class Certificate extends Component {

    state = {
        data,
    }

    render() {

        const {data} = this.state

        return (
            <div style={{ display: 'flex', flex: 2.8, height: 1140 }}>
                <div style={{ width: 1, height: '107%', backgroundColor: '#E6EAED' }} />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 59, paddingTop: 60 }}>
                    <span style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C' }}><b>Chứng chỉ hợp tác</b></span>
                    <span style={{ fontSize: 15, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C', paddingTop: 20 }}>Novas có tổng 120 nhân viên:</span>
                    <div className="certificate">
                        {data.map((item, index) => 
                            <span className="certificate-image" key={index}>
                                <div style={{background: `url(${item.image})`, width: '100%', height: '100%'}} />
                            </span>
                        )}
                    </div>
                </div>
            </div>

        );
    }
}