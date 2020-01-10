import React, { Component } from 'react';
import BannerIntroduce from '../components/BannerIntrodude.js';
import IntroduceMenu from '../components/IntroduceMenu.js';
import Gioithieu from '../images/gioithieu1.png';
import Pullist from '../icons/pullist.svg';

export default class Introduce extends Component {
    render(){
        return(
            <div style={{paddingBottom: 80}}>
                <BannerIntroduce style={{}} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{paddingTop: 60, width: '84%', display: 'flex'}}>
                        <div style={{display: 'flex', flex: 1}}>
                            <IntroduceMenu style={{}} />
                        </div>
                        <div style={{display: 'flex', flex: 2, flexDirection: 'column'}}>
                            <span style={{fontSize: 32, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C'}}><b>Tổng quan</b></span>
                            <div style={{display: 'flex', flexDirection: 'column', paddingTop: 18}}>
                                <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', lineHeight: 2}}>Tên công ty: Công ty TNHH Kỹ Thuật SAO MỚI</span>
                                <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', lineHeight: 2}}>Tên giao dịch: NOVAS Technology Co.,Ltd</span>
                                <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', lineHeight: 2}}>Tên viết tắt: NOVAS (Name Of Vietnam Advanced Systems - Thương hiệu Việt cho các hệ thống tân tiến)</span>
                            </div>
                            <div style={{width: 818, height: 444, paddingTop: 28}}>
                                <div style={{background: `url(${Gioithieu})`, width: '100%', height: '100%', backgroundSize: 'cover'}} />
                            </div>
                            <div style={{paddingTop: 30, display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', fontWeight: 600}}>Sứ Mệnh Novas</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 8}}>“Trở thành công ty kỹ thuật và công nghệ cao ngang tầm với các công ty trong khu vực, cạnh tranh được với các sản phẩm nước ngoài và thực hiện các dự án tại các nước đang phát triển.”</span>
                            </div>
                            <div style={{paddingTop: 30, display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', fontWeight: 600}}>Giá trị cốt lõi Novas</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 8}}>“Nghiên cứu kỹ thuật và công nghệ kết hợp với đội ngũ kỹ sư nhiệt huyết và sáng tạo để tạo ra sản phẩm có giá trị cao.”</span>
                            </div>
                            <div style={{paddingTop: 30, display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', fontWeight: 600}}>Ngành nghề kinh doanh</span>
                                <span style={{paddingTop: 8, lineHeight: 2}}>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Tích hợp các hệ thống tự động và điều khiển</span>
                                    </span>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Thi công M&E</span>
                                    </span>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Tích hợp Camera giám sátsát và Kiểm soát vào ra</span>
                                    </span>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Giải pháp quản lý toà nhà (BMS)</span>
                                    </span>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Dịch vụ bảo trì</span>
                                    </span>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Cung cấp thiết bị điện và cơ</span>
                                    </span>
                                </span>
                            </div>
                            <div style={{paddingTop: 30, display: 'flex', flexDirection: 'column'}}>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', fontWeight: 600}}>Các lĩnh vực ưu tiên</span>
                                <span style={{paddingTop: 8, lineHeight: 2}}>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Khai thác mỏ</span>
                                    </span>
                                    <span style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Pullist} alt="pullist" style={{width: 9.9, height: 9.9}} />
                                        <span style={{fontSize: 15, color: '#373636', fontFamily: 'Roboto', paddingLeft: 15}}>Xử lý nước sạch và nước thải</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

