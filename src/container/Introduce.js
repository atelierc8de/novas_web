import React, { Component } from 'react';
import BannerIntroduce from '../components/BannerIntrodude.js';
import IntroduceMenu from '../components/IntroduceMenu.js';
import IntroduceMain from '../container/IntroduceMain.js';

export default class Introduce extends Component {

    componentDidMount(){
        window.scrollTo(0,0);

        console.log('scroll');
    }

    render(){
        return(
            <div style={{paddingBottom: 80}}>
                <BannerIntroduce style={{}} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '84%', display: 'flex'}}>
                        <div style={{display: 'flex', flex: 1, paddingTop: 60}}>
                            <IntroduceMenu style={{}} />
                        </div>
                        <IntroduceMain {...this.props}/>
                    </div>
                </div>
                
            </div>
        );
    }
}

