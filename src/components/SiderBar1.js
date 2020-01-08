import React, { Component } from 'react';
import Checknau from '../icons/checknau.svg';
import {SeeMore, SeeEverything} from '../components/About.js';
import '../styles/siderbar.css';

export default class SiderBar1 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="siderbar-wrapper">
                    <div className="siderbar">
                        <div className="siderbar1-image1" />
                    </div>
                    <div className="siderbar-container">
                        <div className="siderbar-content">
                            <span style={{ fontFamily: 'Roboto', fontSize: 32 }}><b>Giới thiệu</b></span>
                            <div style={{ fontFamily: 'Roboto', fontSize: 15, display: 'flex', flexDirection: 'column', height: 243, justifyContent: 'space-between', lineHeight: 1.8 }}>
                                <span>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                                <span>Các công việc là đào tạo và cung cấp các mô hình dạy học cho các trường đại học, cao đẳng và các doanh nghiệp như: Đại học Bách khoa Đà Nẵng, Cao đẳng Công nghệ, Công ty Xi măng Hải Vân, Công ty Dệt Hòa Thọ…</span>
                                <span>Với đội ngũ kỹ thuật năng động, sáng tạo, chúng tôi mong muốn được hợp tác với quý khách và cam kết hai bên cùng có lợi và phát triển…</span>
                            </div>
                            <span>
                                <SeeMore style={{}} />
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: 80 }} className="siderbar-wrapper">
                    <div className="siderbar-container">
                        <div className="siderbar-content">
                            <span style={{ fontFamily: 'Roboto', fontSize: 32 }}><b>Sản phẩm & Dịch vụ</b></span>
                            <div style={{ fontFamily: 'Roboto', fontSize: 15, display: 'flex', flexDirection: 'column', height: 444, justifyContent: 'space-evenly', lineHeight: 1.8 }}>
                                <span style={{ display: 'flex' }}>
                                    <div>
                                        <img src={Checknau} alt="checknau" style={{ width: 13.9, height: 13.9, paddingTop: 6 }} />
                                    </div>
                                    <span style={{ paddingLeft: 17 }}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                                </span>
                                <span style={{ display: 'flex' }}>
                                    <div>
                                        <img src={Checknau} alt="checknau" style={{ width: 13.9, height: 13.9, paddingTop: 6 }} />
                                    </div>
                                    <span style={{ paddingLeft: 17 }}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                                </span>
                                <span style={{ display: 'flex' }}>
                                    <div>
                                        <img src={Checknau} alt="checknau" style={{ width: 13.9, height: 13.9, paddingTop: 6 }} />
                                    </div>
                                    <span style={{ paddingLeft: 17 }}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                                </span>
                                <span style={{ display: 'flex' }}>
                                    <div>
                                        <img src={Checknau} alt="checknau" style={{ width: 13.9, height: 13.9, paddingTop: 6 }} />
                                    </div>
                                    <span style={{ paddingLeft: 17 }}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                                </span>
                            </div>
                            <span>
                                <SeeEverything style={{}} />
                            </span>
                        </div>
                    </div>
                    <div className="siderbar">
                        <div className="siderbar1-image2" />
                    </div>

                </div>
            </div>
        );
    }
}



