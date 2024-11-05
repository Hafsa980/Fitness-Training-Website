import React from "react";
import "./Contact.css";
import contactImage from '../images/contactImage.png';
import footer from '../images/footer-img.png';

function Contact() {
    return (
        <div className="contact-page">
            {/* Contact Us Header Section */}
            <section className="contact-header">
                <div className="contact-header-content">
                    <h1>Contact Us</h1>
                    <p>Any question or remarks? Just write us a message!</p>
                </div>
                <img src={contactImage} alt="Athlete" className="contact-image" />
            </section>

            {/* Contact Information Section */}
            <section className="contact-info">
                <h2>Contact Information</h2>
                <p>Say something to start a chat!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>USA, Washington DC</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fas fa-phone"></i>
                        <p>1234-5678</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fas fa-envelope"></i>
                        <p>fitnesstraining123@gmail.com</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Send Us A Message & Join Our Team!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="send-button">Send Now</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h3>Fitness Training</h3>
                        <p>
                            Transform your body with Fitness Training, Your Trusted in Fitness with over 5 Years of Experience. We offer Workout Tracking, Nutrition Tracking, Progress Tracking, Challenges and Achievements, Community Features. Join Our Community Start your Journey Towards a Healthier, Stronger You. Ready To make a Change?
                        </p>
                    </div>
                    <div className="footer-company">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@fitnesstraining.com</p>
                        <p>Phone: +1 234 567 8901</p>
                        <p>Location: 123 Fitness St., Wellness City</p>
                    </div>
                    <div className="footer-image">
                        <img src={footer} alt="Footer image" />
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
                <p className="footer-copy">© 2024 Fitness Training. All rights reserved.</p>
            </footer>

        </div>
    );
}

export default Contact;
