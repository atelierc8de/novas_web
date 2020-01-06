import React, { Component } from 'react';
import {ImageSiderBar1, ImageSiderBar2} from '../components/ImageSiderBar.js';
import Checknau from '../icons/checknau.svg';
import Arrowxemthem from '../icons/Arrowxemthem.svg';
import About from '../components/About.js';

export default class SiderBar1 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '84%' }}>

                    <span>
                        <ImageSiderBar1 style={{}} />
                    </span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{ width: 535, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: 400, alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'Roboto', fontSize: 32 }}><b>Giới thiệu</b></span>
                        <div style={{ fontFamily: 'Roboto', fontSize: 15, display: 'flex', flexDirection: 'column', height: 243, justifyContent: 'space-between', lineHeight: 1.8 }}>
                            <span>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                            <span>Các công việc là đào tạo và cung cấp các mô hình dạy học cho các trường đại học, cao đẳng và các doanh nghiệp như: Đại học Bách khoa Đà Nẵng, Cao đẳng Công nghệ, Công ty Xi măng Hải Vân, Công ty Dệt Hòa Thọ…</span>
                            <span>Với đội ngũ kỹ thuật năng động, sáng tạo, chúng tôi mong muốn được hợp tác với quý khách và cam kết hai bên cùng có lợi và phát triển…</span>
                        </div>
                        <span>
                            <About style={{}} />
                        </span>
                    </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 80, width: '84%' }}>

                    <div style={{ width: 535, display: 'flex', flexDirection: 'column', height: 444, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <p style={{ fontFamily: 'Roboto', fontSize: 32 }}><b>Sản phẩm & Dịch vụ</b></p>
                        <div style={{ fontFamily: 'Roboto', fontSize: 15, display: 'flex', flexDirection: 'column', height: 444, justifyContent: 'space-evenly', lineHeight: 1.8 }}>
                            <span style={{display: 'flex'}}>
                                <div>
                                    <img src={Checknau} alt="checknau" style={{width: 13.9, height: 13.9, paddingTop: 6}} />
                                </div>
                                <span style={{ paddingLeft: 17}}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                            </span>
                            <span style={{display: 'flex'}}>
                                <div>
                                    <img src={Checknau} alt="checknau" style={{width: 13.9, height: 13.9, paddingTop: 6}} />
                                </div>
                                <span style={{ paddingLeft: 17}}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                            </span>
                            <span style={{display: 'flex'}}>
                                <div>
                                    <img src={Checknau} alt="checknau" style={{width: 13.9, height: 13.9, paddingTop: 6}} />
                                </div>
                                <span style={{ paddingLeft: 17}}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                            </span>
                            <span style={{display: 'flex'}}>
                                <div>
                                    <img src={Checknau} alt="checknau" style={{width: 13.9, height: 13.9, paddingTop: 6}} />
                                </div>
                                <span style={{ paddingLeft: 17}}>Novas được thành lập, gồm các anh em thành viên đam mê và nhiệt huyết trong lĩnh vực tự động hóa.</span>
                            </span>
                        </div>
                        <a href="http://localhost:3000/" style={{ fontFamily: 'Roboto', textDecoration: 'none', fontSize: 13, color: '#C81211', lineHeight: 5 }} ><b>XEM TẤT CẢ</b>
                            <img src={Arrowxemthem} alt="arrowxemthem" style={{width: 5.6, height: 9, paddingLeft: 5}} />
                        </a>
                    </div>

                    <span>
                        <ImageSiderBar2 style={{}} />
                    </span>

                </div>
            </div>
        );
    }
}



