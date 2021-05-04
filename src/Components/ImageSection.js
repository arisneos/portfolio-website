import React from 'react';
import about from '../img/about.jpg';

function imageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div> 
            <div className="about-info">
                <h4>I am<span> Aris Neos</span></h4>
                <p className="about-text">
                With more than 7 years of e-commerce experience,
                I have began my endeavour to standardize research practices
                and bridge the gap between UX and Front-End in the greek e-commerce scene.
                I'm currently driving the UX Research and Design efforts of Celestino.
                Past companies include Praktiker.gr , the N.I. Minoglou websites family and Buldoza.gr
                of 
                </p>
            
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Currently living in</p>
                    </div>

                    <div className="right-section">
                        <p>: Aristeidis Neos</p>
                        <p>: 33</p>
                        <p>: Greek</p>
                        <p>: English, French, German, Japanese, Greek</p>
                        <p>: Athens, Greece</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default imageSection;
