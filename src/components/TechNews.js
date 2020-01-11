import React, {Component} from 'react';
import BannerTechNews from '../components/BannerTechNews.js';


export default class Solution extends Component {
    render(){
        return(
            <div style={{ paddingBottom: 80 }}>
                <BannerTechNews />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '84%', display: 'flex', flexDirection: 'column' }}>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}