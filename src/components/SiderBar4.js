import React, { Component } from 'react';
import { ImageSiderBar10, ImageSiderBar11, ImageSiderBar12 } from '../components/ImageSiderBar.js';
import Arrowxemthem from '../icons/Arrowxemthem.svg';


export default class SiderBar4 extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                    <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Tin tức & Sự kiện</b></p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '94%' }}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar10 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 15 }}><b>Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4</b></span>
                            <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, paddingTop: 5 }}>Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar11 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 15 }}><b>Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4</b></span>
                            <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, paddingTop: 5 }}>Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <ImageSiderBar12 style={{}} />
                            <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 15 }}><b>Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4</b></span>
                            <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, paddingTop: 5 }}>Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…</span>
                        </div>
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