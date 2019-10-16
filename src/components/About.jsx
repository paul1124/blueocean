import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller, faTools, faMountain } from '@fortawesome/free-solid-svg-icons';
import './styles/about.css';

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    textTransform: 'uppercase',
    display: 'inline-block',
    margin: '10px 0',
    border: '1px solid white',
    borderRadius: 5+'px',
    padding: '2px 5px',
}
const hover = {
    textDecoration: 'none',
    // color: 'white',
    textTransform: 'uppercase',
    display: 'inline-block',
    margin: '10px 0',
    border: '1px solid white',
    borderRadius: 3+'px',
    padding: '2px 5px',
    color: 'black',
    backgroundColor: 'white',
    transition: '0.25s all ease-in-out'
}

export default function About() {
    const [ onHover, setOnHover ] = useState(false);
    return (
        <section className="about">
            <div className="about-intro">
                    <h2 className="about-title">
                        Services
                    </h2>
                    <div className="about-tasks-border">
                        <div className="about-tasks">
                            <div className="about-task">
                                <div className="about-task-icon"><FontAwesomeIcon icon={faPaintRoller} /></div>
                                <h2 className="about-task-title">Remodeling</h2>
                                <p className="about-task-description">Blue Ocean provide remodeling experiences with various installations and quality assurances</p>
                            </div>
                            <div className="about-task">
                                <div className="about-task-icon"><FontAwesomeIcon icon={faTools} /></div>
                                <h2 className="about-task-title">Repair</h2>
                                <p className="about-task-description">We provide various repair services, as&nbsp;well as A/S maintenance of our&nbsp;remodeling</p>
                            </div>
                            <div className="about-task">
                                <div className="about-task-icon"><FontAwesomeIcon icon={faMountain} /></div>
                                <h2 className="about-task-title">Landscaping</h2>
                                <p className="about-task-description">Blue Ocean also provide various landscaping services including pavers and artifical turf</p>
                            </div>
                        </div>
                        <p className="about-includes">*Our services include but aren't limited to various floor installations, painting via sprayer, plumbing, and many more.</p>
                    </div>
                {/* </div> */}
            </div>
            <div className="about-main">
                
                <div className="about-guarantee">
                    <Link 
                        style={onHover ? hover : linkStyle }
                        onMouseEnter={onMouseOver}
                        onMouseLeave={onMouseOver}
                        to="/contact"
                    >
                        Get a Free Estimate
                    </Link>
                    <p>
                        We choose materials with better quality at a reasonable price. <br/>
                        Job will will be done with a professional standard with guarantee of satisfaction. <br/>
        ​                
                    </p>
                </div>
            </div>
        </section>
    )
    function onMouseOver(e) {
        toggleHover();
    }
    function toggleHover() {
        setOnHover(!onHover);
    }
}