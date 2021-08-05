import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
// import './example.css'
import watchImg687 from './img/watch1.jpg';
import watchImg1200 from './img/wristwatch_1200.jpg';

export default class BasicExample extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: watchImg687,
                        },
                        largeImage: {
                            src: watchImg1200,
                            width: 600,
                            height: 1800
                        }
                    }} />
                </div>
               
                <div style={{height: '500px'}} />
            </div>
        );
    }
}