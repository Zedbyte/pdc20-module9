import React from "react";

const ContactUs = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
            <div className="mb-4">
                <h1 className="display-4 fw-bold">Contact Us</h1>
                <p className="lead text-muted">Feel free to reach out via email at example@example.com</p>
            </div>
            <div className="contact-form w-100" style={{ maxWidth: "500px" }}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Your message..."></textarea>
                </div>
                <button className="btn btn-primary w-100 mt-3">Send Message</button>
            </div>
        </div>
    );
}

export default ContactUs;
