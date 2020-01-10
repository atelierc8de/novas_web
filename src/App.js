import React from 'react';
import HeaderMenu from '../src/components/HeaderMenu.js';
import HeaderLogo from '../src/components/HeaderLogo.js';
import Main from '../src/container/Main.js';
import Footer from '../src/components/Footer.js';

class App extends React.Component {

  render() {

    return (
      <div style={{}}>
        <header style={{ display: 'flex', height: 80, justifyContent: 'center', alignItems: 'center' }}>
          <div style={{width: '84%', display: 'flex', position: 'fixed', height: 80}}>
            <div style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
              <HeaderLogo style={{}} />
            </div>

            <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
              <HeaderMenu style={{}} />
            </div>
          </div>
        </header>

        <Main />

        <footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          
          <Footer style={{}} />

        </footer>
      </div>
    );
  }
}

export default App;
