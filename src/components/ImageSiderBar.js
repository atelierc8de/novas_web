import React, {Component} from 'react';
import Home2 from '../images/home2.png';
import Home3 from '../images/home3.png';



const ImageSiderBar1 = ({ style={} }) => {
    return <img src={Home2} alt="imagesss" style={{ width: 548, height: 444 }} />
}

const ImageSiderBar2 = ({ style={} }) => {
    return <img src={Home3} alt="imagesss" style={{ width: 548, height: 444 }} />
}

export {ImageSiderBar1, ImageSiderBar2}