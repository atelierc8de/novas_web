import React, { Component } from 'react';
import BannerSolution from '../components/BannerSolution.js';
import Giaiphap1 from '../images/giaiphap1.png';
import Giaiphap2 from '../images/giaiphap2.png';
import Giaiphap3 from '../images/giaiphap3.png';
import Giaiphap4 from '../images/giaiphap4.png';
import { SeeMore } from '../components/About.js';


export default class Solution extends Component {
    render() {
        return (
            <div style={{ paddingBottom: 80 }}>
                <BannerSolution />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '84%', display: 'flex', flexDirection: 'column' }}>
                        <div className="solution-wrapper">
                            <div className="solution">
                                <div className="solution-image">
                                    <div style={{ background: `url(${Giaiphap1})` }} className="solution-image1" />
                                </div>
                                <div className="solution-content">
                                    <span style={{ fontSize: 20, fontFamily: 'Roboto', color: '#2C2C2C', lineHeight: 1.5 }}><b>Giải pháp xử lý nước công nghiệp của hãng Rockwell Automation</b></span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Giải quyết những thách thức của điều khiển quá trình phức tạp nhất trong xử lý nước thải, nước ngọt hoặc khử mặn với giải pháp từ hãng Rockwell Automation.</span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Bằng cách kết hợp những khả năng rộng lớn của hệ thống tiên tiến Kiến trúc tích hợp, các thiết bị điều khiển động cơ thông minh, và các hệ thống điều khiển tự động hoá quá trình.</span>
                                    <span style={{ paddingTop: 20 }}>
                                        <SeeMore />
                                    </span>
                                </div>
                            </div>
                            <div className="solution">

                                <div className="solution-content">
                                    <span style={{ fontSize: 20, fontFamily: 'Roboto', color: '#2C2C2C', lineHeight: 1.5 }}><b>Giải pháp điều khiển tự động cho nhà máy xử lý vàng</b></span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Novas cung cấp giải pháp điều khiển tự động tổng thể cho Nhà Máy Khai Thác Vàng bao gồm các hệ thống điện, hệ thống điều khiển tự động và các hệ thống phụ trợ tích hợp khác như hệ thống máy phát điện, hệ thống máy nén khí, hệ thống nước, hệ thống an ninh tích hợp...</span>
                                    <span style={{ paddingTop: 20 }}>
                                        <SeeMore />
                                    </span>
                                </div>

                                <div className="solution-image">
                                    <div style={{ background: `url(${Giaiphap2})` }} className="solution-image1" />
                                </div>
                            </div>

                            <div className="solution">
                                <div className="solution-image">
                                    <div style={{ background: `url(${Giaiphap3})` }} className="solution-image1" />
                                </div>
                                <div className="solution-content">
                                    <span style={{ fontSize: 20, fontFamily: 'Roboto', color: '#2C2C2C', lineHeight: 1.5 }}><b>Giải pháp xử lý nước công nghiệp của hãng Rockwell Automation</b></span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Ngày nay, các Nhà máy đều tìm mọi cách để tối ưu hóa sản xuất nhằm mang lại hiệu quả trong quá trình vận hành Nhà máy cũng như sự phát triển của Công ty.</span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Chúng tôi xin đưa ra giải pháp: giám sát các dây chuyền sản xuất và thu thập dữ liệu thông qua bảng hiển thị và kết nối về máy tính trung tâm.</span>
                                    <span style={{ paddingTop: 20 }}>
                                        <SeeMore />
                                    </span>
                                </div>
                            </div>

                            <div className="solution">

                                <div className="solution-content">
                                    <span style={{ fontSize: 20, fontFamily: 'Roboto', color: '#2C2C2C', lineHeight: 1.5 }}><b>Giải pháp tiết kiệm năng lượng sử dụng biến tần</b></span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Hiện nay trong sản xuất công nghiệp cũng như các ngành dịch vụ như kinh doanh khách sạn hay tòa nhà văn phòng, các thiết bị điện quay chiếm một tỉ lệ rất lớn trong số các thiết bị tiêu thụ năng lượng điện.</span>
                                    <span style={{ fontFamily: 'Roboto', fontSize: 15, color: '#373636', paddingTop: 20 }}>Theo khảo sát của hiệp hội Copper (International Copper Association) và những nghiên cứu gần đây về tình hình tiêu thụ năng lượng.</span>
                                    <span style={{ paddingTop: 20 }}>
                                        <SeeMore />
                                    </span>
                                </div>

                                <div className="solution-image">
                                    <div style={{ background: `url(${Giaiphap4})` }} className="solution-image1" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}