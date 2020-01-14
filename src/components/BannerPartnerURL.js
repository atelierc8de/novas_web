import React, {Component} from 'react';
import BannerPartnerURLs from '../images/Doitacbanner.png';
import '../styles/style.css';

export default class BannerPartnerURL extends Component {
    render(){
        return(
            <div className="slider-wrapper1" style={{marginTop:80}}>

                <div style={{background: `url('${BannerPartnerURLs}') no-repeat center center `, width: '100%', height: '100%', backgroundSize: 'cover'}} className="slider-content1">
                    <div className="inner1">
                        <span style={{fontSize:44, color: '#FFFFFF', fontWeight: 800, textShadow: '0px 2px 2px #000000'}}>Đối tác</span>
                    </div>
                </div>

            </div>
        );
    }
}