import React from 'react';
import Home2 from '../images/home2.png';
import Home3 from '../images/home3.png';
import Home4 from '../images/home4.png';
import Home5 from '../images/home5.png';
import Home6 from '../images/home6.png';



const ImageSiderBar1 = ({ style={} }) => {
    return <img src={Home2} alt="imagesss" style={{ width: 548, height: 444 }} />
}

const ImageSiderBar2 = ({ style={} }) => {
    return <img src={Home3} alt="imagesss" style={{ width: 548, height: 444 }} />
}

const ImageSiderBar3 = ({ style={} }) => {
    return <img src={Home4} alt="imagesss" style={{width: 353 , height: 250}} />
}

const ImageSiderBar4 = ({ style={} }) => {
    return <img src={Home5} alt="imagesss" style={{width: 353 , height: 250}} />
}

const ImageSiderBar5 = ({ style={} }) => {
    return <img src={Home6} alt="imagesss" style={{width: 353 , height: 250}} />
}

export {ImageSiderBar1, ImageSiderBar2, ImageSiderBar3, ImageSiderBar4, ImageSiderBar5}