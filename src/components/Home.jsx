import React, { useRef, useState, useEffect } from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
// import Overlay from 'pigeon-overlay'
import './styles/home.css';

const map = (
    <Map center={[34.4188413, -117.4166474]} zoom={8} width={600} height={400}>
      <Marker anchor={[33.7330433, -117.8321516]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[34.1775507, -118.2062456]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      <Marker anchor={[34.9590695, -116.4269591]} payload={1} onClick={({ event, anchor, payload }) => {}} />

  
      {/* <Overlay anchor={[33.8368118, -118.045191]} offset={[120, 79]}>
        <img src='pigeon.jpg' width={240} height={158} alt='' />
      </Overlay> */}
    </Map>
  )

export default function Home() {
    const [ aboutTitle, setAboutTitle ] = useState(false);
    const [ aboutMain, setAboutMain ] = useState(false);
    const inputEl = useRef();
    const inputRef = useRef();
    const aboutTitleStyle = {
        opacity: 1
    }
    const aboutMainStyle = {
        opacity: 1
    }
    const aboutMainMainStyle = {
        paddingTop: 0
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });
    return (
        <section id="home">
            <div className="home">
                <div className="home-heading">
                    <h2 className="home-title">Blue Ocean</h2>
                    <h3 className="home-subtitle">Construction and Remodeling</h3>
                    <p className="home-description">HERE TO HELP WITH YOUR NEXT HOME PROJECT</p>
                </div>
            </div>
            <div className="home-about">
                <figure className="home-about-img"></figure>
                <h2 ref={inputEl} style={aboutTitle ? aboutTitleStyle : null} className="home-about-title">Why Blue Ocean?</h2>
                <div ref={inputRef} style={aboutMain ? aboutMainMainStyle : null} className="home-about-main">
                    <div style={aboutMain ? aboutMainStyle : null} className="home-map">
                        {map}
                    </div>
                    <p className="about-main-intro" style={aboutMain ? aboutMainStyle : null}>
                        Founded in 2014, <strong>Blue Ocean</strong> is an experienced contractor with expertise in Residential Remodeling.
                        <br/><br/>With a wide range of specialty that takes account of both design and efficacy, <br/>we try and find the best remodeling experience for our clients. <br/><br/><strong>Blue Ocean</strong> team guarantees all kind of residential and commercial property with excellent quality at a reasonable price. 
                        <br/><br/><span className="home-area">*Our service covers L.A. and Orange County up to Inland Empire Area.</span>
                    </p>
                    
                </div>

                
            </div>
        </section>
    )
    function handleScroll(e) {
        if(checkVisible(inputEl)) {
            setAboutTitle(true);
        }
        if(checkVisible(inputRef)) {
            setAboutMain(true);
        }
    }
    function checkVisible(div) {
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        const rect = div.current.getBoundingClientRect();
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }
}