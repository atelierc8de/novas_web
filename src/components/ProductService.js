import React, { Component } from 'react';
import BannerProductService from '../components/BannerProductService.js';
import '../styles/siderbar.css'

const data = [
    {
        image: require('../images/SPvaDV1.png'),
        title: 'Thi công hệ thống an ninh tích hợp',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/SPvaDV2.png'),
        title: 'Hệ thống quản lý sản xuất tối ưu',
        content: 'Thiết kế, sản xuất, lắp đặt các thiết bị, phần mềm, mạng truyền thông phục vụ hệ thống quản lý sản xuất tối ưu cho các dây chuyền sản xuất thuộc các ngành nghề...'
    },
    {
        image: require('../images/SPvaDV3.png'),
        title: 'Hệ thống tích hợp điều khiển toàn diện',
        content: 'Tư vấn, thiết kế, cung cấp thiết bị, thi công, sửa chữa, nâng cấp các hệ thống tích hợp điều khiển toàn diện hoặc từng phần cho các thiết bị, dây chuyền sản xuất...'
    },
    {
        image: require('../images/SPvaDV4.png'),
        title: 'Kinh doanh thiết bị tự động hóa',
        content: 'Cung cấp dịch vụ bảo trì trọn gói, bảo trì định kỳ, thay thế, sửa chữa, nâng cấp thiết bị, tư vấn qui trình khai thác, dự phòng vật tư.'
    },
    {
        image: require('../images/SPvaDV5.png'),
        title: 'Dịch vụ bảo trì',
        content: 'Đây là dạng các thiết bị mô phỏng được hỗ trợ bởi kỹ thuật đồ họa 3D giúp cho người sử dụng có cảm giác như đang thao tác trên thiết bị thật, đang hiện hữu…'
    },
    {
        image: require('../images/SPvaDV6.png'),
        title: 'Mô hình hiện thực ảo',
        content: 'Novas hiện là Nhà phân phối thiết bị điện Schneider và Nhà tích hợp hệ thống của Rockwell, có khả năng cung ứng những mặt hàng đòi hỏi kỹ thuật cao...'
    },
]

export default class ProductService extends Component {

    state ={
        data,
    }

    render() {
        const {data} = this.state;
        return (
            <div style={{ paddingBottom: 140 }}>
                <BannerProductService />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '84%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ paddingTop: 39, width: 773 }}>
                            <span style={{ fontSize: 24, fontFamily: 'Roboto', color: '#2C2C2C', lineHeight: 1.5 }}>Sức trẻ của NOVAS nỗ lực làm hài lòng khách hàng trên cơ sở lắng nghe, nghĩ hay và làm tốt với nhiệt huyết cao nhất</span>
                        </div>
                        <div className="productservice-wrapper">
                            <div className="productservice-content">
                                {data.map((item, index) =>
                                    <div className="productservice" key={index} >
                                        <img src={item.image} className="productservice-image" alt="imagesss" />
                                        <span style={{ fontSize: 17, fontFamily: 'Roboto', color: '#2C2C2C', width: 548, lineHeight: 1.3, paddingTop: 12 }}><b>{item.title}</b></span>
                                        <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#2C2C2C', width: 548, paddingTop: 5, lineHeight: 1.3 }}>{item.content}</span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}