import React from 'react';
import HeaderMenu from '../src/components/HeaderMenu.js';
import HeaderLogo from '../src/components/HeaderLogo.js';
import SiderBar1 from '../src/components/SiderBar1.js';
import Banner from '../src/components/Banner.js';
import SiderBar2 from '../src/components/SiderBar2.js';
import '../src/styles/SiderBar.css';
import SiderBar3 from '../src/components/SiderBar3.js';
import SiderBar4 from '../src/components/SiderBar4.js';
import Partner from '../src/components/Partner.js';
import {LogoFooterNovas, LogoFaceBook} from '../src/components/ImageSiderBar.js';


class App extends React.Component {

  render() {

    return (
      <div style={{}}>
        <header style={{ display: 'flex', height: 80, justifyContent: 'center' }}>
          <div style={{width: '84%', display: 'flex'}}>
            <div style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
              <HeaderLogo style={{}} />
            </div>

            <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
              <HeaderMenu style={{}} />
            </div>
          </div>
        </header>

        <Banner style={{}} />

        <body style={{ paddingTop: 80 }}>
          <SiderBar1 style={{}} />

        </body>

        {/* gradient */}
        <div style={{ height: 1, width: '100%', marginTop: 80 }} className="gradient" />

        <SiderBar2 style={{}} />

        <SiderBar3 style={{}} />

        <SiderBar4 style={{}} />
        
        <Partner style={{}} />

        <footer style={{height: 74, background: '#911212', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          
          <div style={{width: '84%', display: 'flex'}}>
            <div style={{display: 'flex', flex: 1}}>
              <LogoFooterNovas style={{}} />
            </div>
            <div style={{display: 'flex', alignItems: 'center', flex: 4, justifyContent: 'space-between', paddingRight: 30}}>
              <span style={{fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF'}}>Địa chỉ: 120 Xô Viết Nghệ Tĩnh, Đà Nẵng</span>
              <span style={{height: 11, border: '0.5px solid #FFFFFF'}}></span>
              <span style={{fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF'}}>Điện thoại: 0236. 3736909</span>
              <span style={{height: 11, border: '0.5px solid #FFFFFF'}}></span>
              <span style={{fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF'}}>Fax: 0236 3736789</span>
              <span style={{height: 11, border: '0.5px solid #FFFFFF'}}></span>
              <span style={styles.button}>Email: contact@novas.com.vn</span>
            </div>
            <div style={{display: 'flex', flex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 50, flex: 1}}>
                <LogoFaceBook />
                <span style={{height: 16, border: '0.5px solid #EEEEEE'}}></span>
                <p style={styles.button}>&copy; 2019 by Novas</p>
              </div>
            </div>
          </div>

        </footer>
      </div>
    );
  }
}

export default App;

const styles = {
  button: {fontSize: 13, fontFamily: 'Roboto', color: '#FFFFFF'}
}
