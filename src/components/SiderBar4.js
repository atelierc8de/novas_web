import React, { Component } from 'react';
import Arrowxemthem from '../icons/Arrowxemthem.svg';


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
            <div style={{paddingBottom: 30}}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Tin tức & Sự kiện</b></p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '84%' }}>
                        {data.map((item) => 
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <img src={item.image} style={{width: 353 , height: 240}} alt="imagesss" />
                                <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 15 }}><b>{item.title}</b></span>
                                <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, paddingTop: 5, lineHeight: 1.3 }}>{item.content}</span>
                            </div>
                        )}
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 15 }}>
                    <a href="#" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 13, color: '#C81211', lineHeight: 5 }} ><b>XEM TẤT CẢ</b>
                        <img src={Arrowxemthem} alt="arrowxemthem" style={{ width: 5.6, height: 9, paddingLeft: 5 }} />
                    </a>
                </div>
            </div>
        );
    }
}