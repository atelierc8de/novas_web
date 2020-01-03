import React from 'react';
import HeaderMenu from '../src/components/HeaderMenu.js';
import HeaderLogo from '../src/components/HeaderLogo.js';
import SiderBar1 from '../src/components/SiderBar1.js';
import Banner from '../src/components/Banner.js';
import SiderBar2 from '../src/components/SiderBar2.js';
import styles from  '../src/styles/SiderBar.css';


class App extends React.Component {

  render() {

    return (
      <div style={{}}>
        <header style={{ display: 'flex', height: 80 }}>

          <div style={{ flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <HeaderLogo style={{}} />
          </div>

          <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
            <HeaderMenu style={{}} />
          </div>

        </header>

        <Banner style={{}} />

        <body style={{ paddingTop: 80 }}>
          <SiderBar1 style={{}} />

        </body>
        <div style={{ height: 1, width: '100%', marginTop: 80 }} className="gradient"></div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <p style={{ fontFamily: 'Roboto', fontSize: 33, color: '#2C2C2C' }}><b>Dự án nổi bật</b></p>
        </div>

        <SiderBar2 style={{}} />
      </div>
    );
  }
}

export default App;
