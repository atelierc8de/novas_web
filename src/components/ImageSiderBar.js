import React from 'react';
import Home2 from '../images/home2.png';
import Home3 from '../images/home3.png';
import Home4 from '../images/home4.png';
import Home5 from '../images/home5.png';
import Home6 from '../images/home6.png';
import Home7 from '../images/home7.png';
import Home8 from '../images/home8.png';
import Home9 from '../images/home9.png';
import Home10 from '../images/home10.png';
import Home11 from '../images/home11.png';
import Home12 from '../images/home12.png';
import Home13 from '../images/home13.png';
import Bnb from '../images/bnb.png';
import Ebay from '../images/ebay.png';
import Stripe from '../images/stripe.png';
import Capital from '../images/capital.png';
import Imb from '../images/ibm.png';
import Prudential from '../images/prudential.png';
import Zappos from '../images/zappos.png';
import Sales from '../images/sales.png';
import Kayak from '../images/kayak.png';
import Bass from '../images/bass.png';
import Amazon from '../images/amazon.png';

import LogoFooter from '../icons/logofooter.svg';
import FaceBook from '../icons/facebook.svg';



//Gioi thieu, San pham & Dich vu (width: 548, height: 444)
const ImageSiderBar1 = ({ style={} }) => {
    return <img src={Home2} alt="imagesss" style={{ width: 548, height: 444 }} />
}

const ImageSiderBar2 = ({ style={} }) => {
    return <img src={Home3} alt="imagesss" style={{ width: 548, height: 444 }} />
}

// Du an noi bat (width: 353 , height: 250)
const ImageSiderBar3 = ({ style={} }) => {
    return <img src={Home4} alt="imagesss" style={{width: 353 , height: 250}} />
}

const ImageSiderBar4 = ({ style={} }) => {
    return <img src={Home5} alt="imagesss" style={{width: 353 , height: 250}} />
}

const ImageSiderBar5 = ({ style={} }) => {
    return <img src={Home6} alt="imagesss" style={{width: 353 , height: 250}} />
}

//San pham tu Novas (width: 255 , height: 170)
const ImageSiderBar6 = ({ style={} }) => {
    return <img src={Home7} alt="imagesss" style={{width: 255 , height: 170}} />
}

const ImageSiderBar7 = ({ style={} }) => {
    return <img src={Home8} alt="imagesss" style={{width: 255 , height: 170}} />
}

const ImageSiderBar8 = ({ style={} }) => {
    return <img src={Home9} alt="imagesss" style={{width: 255 , height: 170}} />
}

const ImageSiderBar9 = ({ style={} }) => {
    return <img src={Home10} alt="imagesss" style={{width: 255 , height: 170}} />
}

// Tin tuc & Su kien (width: 353 , height: 240)
const ImageSiderBar10 = ({ style={} }) => {
    return <img src={Home11} alt="imagesss" style={{width: 353 , height: 240}} />
}

const ImageSiderBar11 = ({ style={} }) => {
    return <img src={Home12} alt="imagesss" style={{width: 353 , height: 240}} />
}

const ImageSiderBar12 = ({ style={} }) => {
    return <img src={Home13} alt="imagesss" style={{width: 353 , height: 240}} />
}

// logo 

const LogoBnb = ({ style={} }) => {
    return <img src={Bnb} alt="bnb" style={{width: 103, height: 32}} />
}

const LogoEbay = ({ style={} }) => {
    return <img src={Ebay} alt="ebay" style={{width: 76, height: 30}} />
}

const LogoStripe = ({ style={} }) => {
    return <img src={Stripe} alt="stripe" style={{width: 72, height: 30}} />
}

const LogoCapital = ({ style={} }) => {
    return <img src={Capital} alt="capital" style={{width: 104, height: 37}} />
}

const LogoImb = ({ style={} }) => {
    return <img src={Imb} alt="ibm" style={{width: 69, height: 28}} />
}

const LogoPrudential = ({ style={} }) => {
    return <img src={Prudential} alt="prudential" style={{width: 144, height: 31}} />
}

const LogoZappos = ({ style={} }) => {
    return <img src={Zappos} alt="zappos" style={{width: 84, height: 30}} />
}

const LogoSales = ({ style={} }) => {
    return <img src={Sales} alt="sales" style={{width: 71, height: 50}} />
}

const LogoKayak = ({ style={} }) => {
    return <img src={Kayak} alt="kayak" style={{width: 156, height: 30}} />
}

const LogoBass = ({ style={} }) => {
    return <img src={Bass} alt="bass" style={{width: 50, height: 60}} />
}

const LogoAmazon = ({ style={} }) => {
    return <img src={Amazon} alt="amazon" style={{width: 94, height: 28}} />
}

// logo footer
const LogoFooterNovas = ({ style={} }) => {
    return <a href="#" style={{}}>
            <img src={LogoFooter} alt="logofooter" style={{width: 131, height: 52}} />
        </a>
}

const LogoFaceBook = ({ style={} }) => {
    return <a href="#" style={{}}>
            <img src={FaceBook} alt="facebook" style={{width: 8, height: 16}} />
        </a>
}

export {ImageSiderBar1, 
    ImageSiderBar2, 
    ImageSiderBar3, 
    ImageSiderBar4, 
    ImageSiderBar5, 
    ImageSiderBar6, 
    ImageSiderBar7, 
    ImageSiderBar8, 
    ImageSiderBar9, 
    ImageSiderBar10, 
    ImageSiderBar11, 
    ImageSiderBar12, 
    LogoBnb,
    LogoEbay,
    LogoStripe,
    LogoCapital,
    LogoImb,
    LogoPrudential,
    LogoZappos,
    LogoSales,
    LogoKayak,
    LogoBass,
    LogoAmazon,
    LogoFooterNovas,
    LogoFaceBook
}