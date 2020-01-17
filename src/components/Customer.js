import React, {Component} from 'react';
import { LogoZappos1, LogoSales1, LogoKayak1, LogoBass1, LogoAmazon1 } from '../components/ImageSiderBar.js';
import BannerCustomer from '../components/BannerCustomer.js';
import '../styles/siderbar.css';
import '../styles/style.css';

export default class Customer extends Component {
    render(){
        return(
            <div style={{paddingBottom: 80}}>
                <BannerCustomer />
                <div style={{display: 'flex', justifyContent: 'center', paddingTop: 40}}>
                    <div style={{width: '84%', display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex'}}>
                            <span style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <LogoZappos1 />
                            </span>
                            <span style={{display: 'flex', flex: 3.5, flexDirection: 'column', marginLeft: 120}}>
                                <span style={{fontSize: 17, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C'}}>Công ty TNHH ABC</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 7}}>Nam vitae tortor luctus, convallis felis vel, congue nunc. Aliquam erat volutpat. Cras odio ligula, tristique ac volutpat sit amet, rutrum quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                <a href="https://www.demo.com" style={{textDecoration: 'none', paddingTop: 7}} >https://www.demo.com</a>
                            </span>
                        </div>

                        <div style={{width: '100%', height: 1, backgroundColor: '#D8D8D8', marginTop: 30, marginBottom: 30}} />

                        <div style={{display: 'flex'}}>
                            <span style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <LogoSales1 />
                            </span>
                            <span style={{display: 'flex', flex: 3.5, flexDirection: 'column', marginLeft: 120}}>
                                <span style={{fontSize: 17, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C'}}>Công ty TNHH ABC</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 7}}>Nam vitae tortor luctus, convallis felis vel, congue nunc. Aliquam erat volutpat. Cras odio ligula, tristique ac volutpat sit amet, rutrum quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                <a href="https://www.demo.com" style={{textDecoration: 'none', paddingTop: 7}} >https://www.demo.com</a>
                            </span>
                        </div>

                        <div style={{width: '100%', height: 1, backgroundColor: '#D8D8D8', marginTop: 30, marginBottom: 30}} />

                        <div style={{display: 'flex'}}>
                            <span style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <LogoKayak1 />
                            </span>
                            <span style={{display: 'flex', flex: 3.5, flexDirection: 'column', marginLeft: 120}}>
                                <span style={{fontSize: 17, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C'}}>Công ty TNHH ABC</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 7}}>Nam vitae tortor luctus, convallis felis vel, congue nunc. Aliquam erat volutpat. Cras odio ligula, tristique ac volutpat sit amet, rutrum quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                <a href="https://www.demo.com" style={{textDecoration: 'none', paddingTop: 7}} >https://www.demo.com</a>
                            </span>
                        </div>

                        <div style={{width: '100%', height: 1, backgroundColor: '#D8D8D8', marginTop: 30, marginBottom: 30}} />

                        <div style={{display: 'flex'}}>
                            <span style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <LogoBass1 />
                            </span>
                            <span style={{display: 'flex', flex: 3.5, flexDirection: 'column', marginLeft: 120}}>
                                <span style={{fontSize: 17, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C'}}>Công ty TNHH ABC</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 7}}>Nam vitae tortor luctus, convallis felis vel, congue nunc. Aliquam erat volutpat. Cras odio ligula, tristique ac volutpat sit amet, rutrum quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                <a href="https://www.demo.com" style={{textDecoration: 'none', paddingTop: 7}} >https://www.demo.com</a>
                            </span>
                        </div>

                        <div style={{width: '100%', height: 1, backgroundColor: '#D8D8D8', marginTop: 30, marginBottom: 30}} />

                        <div style={{display: 'flex'}}>
                            <span style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <LogoAmazon1 />
                            </span>
                            <span style={{display: 'flex', flex: 3.5, flexDirection: 'column', marginLeft: 120}}>
                                <span style={{fontSize: 17, fontFamily: 'Roboto', fontWeight: 600, color: '#2C2C2C'}}>Công ty TNHH ABC</span>
                                <span style={{fontSize: 15, fontFamily: 'Roboto', color: '#373636', lineHeight: 1.5, paddingTop: 7}}>Nam vitae tortor luctus, convallis felis vel, congue nunc. Aliquam erat volutpat. Cras odio ligula, tristique ac volutpat sit amet, rutrum quis justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                <a href="https://www.demo.com" style={{textDecoration: 'none', paddingTop: 7}} >https://www.demo.com</a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}