import React, { Component } from 'react';
import BannerTechNews from '../components/BannerTechNews.js';
import '../styles/siderbar.css';


const data = [
    {
        image: require('../images/tintuc1.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc2.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc3.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc4.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc5.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc6.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc7.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc8.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc9.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc10.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc11.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
    {
        image: require('../images/tintuc12.png'),
        title: 'Mitsubishi công bố động cơ servo và bộ điều khiển chuyển động MR-J4',
        content: 'Tháng 03/2013 - Rockwell Automation giới thiệu dòng sản phẩm Biến tần nhỏ gọn Allen-Bradley PowerFlex 525 AC Drive để giúp đơn giản hóa việc thiết kế…'
    },
]

export default class Solution extends Component {

    state = {
        data,
    }

    render() {

        const {data} = this.state;
        return (
            <div style={{ paddingBottom: 80 }}>
                <BannerTechNews />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '84%', display: 'flex', flexDirection: 'column' }}>
                        <div className="project-wrapper">
                            <div className="project-content">
                                {data.map((item, index) =>
                                    <div className="project" key={index} >
                                        <img src={item.image} className="project-image" alt="imagesss" />
                                        <span style={{ fontSize: 15, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 12 }}><b>{item.title}</b></span>
                                        <span style={{ fontSize: 13, fontFamily: 'Roboto', color: '#2C2C2C', width: 353, lineHeight: 1.3, paddingTop: 5 }}>{item.content}</span>
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