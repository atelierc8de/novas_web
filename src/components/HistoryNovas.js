import React, { Component } from 'react';
import Pullist from '../icons/pullist.svg';
import '../styles/style.css';

export default class HistoryNovas extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flex: 2.8, height: 1000 }}>
                <div style={{ width: 1, height: '108%', backgroundColor: '#E6EAED' }} />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 59, paddingTop: 60 }}>
                    <span style={{ fontSize: 32, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C' }}><b>Lịch sử Novas</b></span>
                    <div style={{height: 900, display: 'flex'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, justifyContent: 'space-between', height: 800 }}>
                            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.5 }}>
                                <span style={{ fontSize: 20, color: '#373636', fontWeight: 600 }}>2005</span>
                                <span style={{ fontSize: 12, fontFamily: 'Roboto', color: '#373636' }}>SƠ KHAI</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.5 }}>
                                <span style={{ fontSize: 20, color: '#373636', fontWeight: 600 }}>2006-2007</span>
                                <span style={{ fontSize: 12, fontFamily: 'Roboto', color: '#373636' }}>VƯỢT KHÓ</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.5 }}>
                                <span style={{ fontSize: 20, color: '#373636', fontWeight: 600 }}>2008-2009</span>
                                <span style={{ fontSize: 12, fontFamily: 'Roboto', color: '#373636' }}>TRƯỞNG THÀNH</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.5 }}>
                                <span style={{ fontSize: 20, color: '#373636', fontWeight: 600 }}>2010</span>
                                <span style={{ fontSize: 12, fontFamily: 'Roboto', color: '#373636' }}>PHÁT TRIỂN</span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.5 }}>
                                <span style={{ fontSize: 20, color: '#373636', fontWeight: 600 }}>2011-đến nay</span>
                                <span style={{ fontSize: 12, fontFamily: 'Roboto', color: '#373636' }}>KHẲNG ĐỊNH</span>
                            </span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', marginTop: 45, alignItems: 'center', marginLeft: 70}}>
                            <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                            <div className="borderHeight" />
                            <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                            <div className="borderHeight" />
                            <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                            <div className="borderHeight" />
                            <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                            <div className="borderHeight" />
                            <img src={Pullist} alt="pullist" style={{ width: 9.9, height: 9.9 }} />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 50, width: 567, paddingTop: 40, height: 800}}>
                            <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5}}>Novas được thành lập, gồm các anh em đam mê và nhiệt huyết trong lĩnh vực tự động hóa. Các công việc là đào tạo và cung cấp các mô hình dạy học cho các trường đại học, cao đẳng và các doanh nghiệp như: Đại học Bách khoa Đà Nẵng, Cao đẳng Công nghệ, Công ty Xi măng Hải Vân, Công ty Dệt Hòa Thọ…</span>
                            <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 100}}>Với các kinh nghiệm từ các công trình đã làm và kiến thức tu nghiệp tại nước ngoài, Novas bắt đầu thực hiện các dự án cải tạo nhà máy trong khu vực, hoàn thiện các sản phẩm về mô hình đào tạo và đã đạt giải nhất cuộc thi mô hình đào tạo toàn quốc năm 2006.</span>
                            <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 100}}>Với các kinh nghiệm từ các công trình đã làm và kiến thức tu nghiệp tại nước ngoài, Novas bắt đầu thực hiện các dự án cải tạo nhà máy trong khu vực, hoàn thiện các sản phẩm về mô hình đào tạo và đã đạt giải nhất cuộc thi mô hình đào tạo toàn quốc năm 2006.</span>
                            <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 102}}>Novas được các đối tác tin tưởng và ký kết thực hiện các công trình lớn như: Xây dựng toàn bộ hệ thống điện và điều khiển dạng chìa khóa trao tay cho Công ty Vàng Phước Sơn (Olympus, Canada), trị giá 3,000,000USD; Hệ thống quản lý sản xuất tối ưu cho Công ty Mabuchi Motor (Nhật); Hệ thống SCADA, điều khiển giám sát từ xa cho Công ty Cấp nước DAWACO kết hợp với Công ty Vitens-Evides (Hà Lan)…</span>
                            <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 82}}>Novas tự tin khẳng định mình đủ năng lực tham gia vào các công trình tầm cỡ quốc gia và khu vực trong lĩnh vực Điện - Tự động hóa.</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}