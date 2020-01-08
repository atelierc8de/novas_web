import React, { Component } from 'react';
import {SeeEverything} from '../components/About.js';
import '../styles/siderbar.css'


const data = [
    {
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…',
        image: require('../images/home11.png')
    },
    {
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…',
        image: require('../images/home12.png')
    },
    {
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…',
        image: require('../images/home13.png')
    },
]

export default class SiderBar4 extends Component {

    state = {
        data,
    }
    render() {

        const {data} = this.state
        return (
            <div style={{paddingBottom: 60}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Tin tức & Sự kiện</b></p>
                </div>
                <div className="siderbar2-wrapper">
                    <div className="siderbar2-content">
                        {data.map((item, index) => 
                            <div style={{display: 'flex', flexDirection: 'column'}} key={index} >
                                <img src={item.image} style={{width: 353 , height: 240}} alt="imagesss" />
                                <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 15 }}><b>{item.title}</b></span>
                                <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, paddingTop: 5, lineHeight: 1.3 }}>{item.content}</span>
                            </div>
                        )}
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30 }}>
                    <SeeEverything style={{}} />
                </div>
            </div>
        );
    }
}