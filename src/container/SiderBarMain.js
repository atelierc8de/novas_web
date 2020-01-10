import React from 'react';
import SiderBar1 from '../components/SiderBar1.js';
import Banner from '../components/Banner.js';
import SiderBar2 from '../components/SiderBar2.js';
import '../styles/siderbar.css';
import SiderBar3 from '../components/SiderBar3.js';
import SiderBar4 from '../components/SiderBar4.js';
import Partner from '../components/Partner.js';

export default class SiderBarMain extends React.Component {
    render() {
        return (
            <div>
                <Banner style={{}} />

                <div style={{ paddingTop: 80 }}>
                    <SiderBar1 style={{}} />

                    {/* gradient */}

                    <div style={{}} className="gradient" />

                    <SiderBar2 style={{}} />

                    <SiderBar3 style={{}} />

                    <SiderBar4 style={{}} />

                </div>
                <Partner style={{}} />
            </div>
        );
    }
}
