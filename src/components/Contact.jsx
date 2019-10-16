import React from 'react';
import './styles/contact.css';

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact-intro">
                <h2 className="contact-title">Contact</h2>
                {/* <h4 className="contact-subtitle">Get started. Send a note to request free estimate.</h4> */}
            </div>
            <div className="contact-flex">
                <div className="contact-banner">
                    <h2 className="banner-title">Service Hours/Info</h2>
                    <div className="banner-main">
                        <div className="banner-img">
                            blueoceanlogo
                        </div>
                        <div className="banner-description">
                            <h2 className="description-style">John Hong</h2>
                            <p className="description-style">johnhong@email.com</p>
                            <p className="description-style">(714) 362-5138</p>
                            <p className="description-style">Available 24/7</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form-border">
                    <div className="contact-form-border-2">
                        <div className="contact-form">
                            <div className="contact-form-intro">Send a note to request free estimate</div>
                            <form action="">
                                <label htmlFor="name">Name</label>
                                <input type="text" required/>
                                <label htmlFor="email">Email</label>
                                <input type="email" required/>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" required/>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" required></textarea>
                                <button className="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}