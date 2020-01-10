import React, {Component} from 'react';
import Banner from '../images/gioithieubanner.png';
import '../styles/style.css';

export default class BannerIntroduce extends Component {
    render(){
        return(
            <div className="slider-wrapper1" style={{marginTop:80}}>

                <div style={{background: `url('${Banner}') no-repeat center center `, width: '100%', height: '100%', backgroundSize: 'cover'}} className="slider-content1">
                    <div className="inner1">
                        <span style={{fontSize:44, color: '#FFFFFF', fontWeight: 800, textShadow: '0px 2px 2px #000000'}}>Giới thiệu</span>
                    </div>
                </div>

            </div>
        );
    }
}