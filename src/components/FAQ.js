import React, { useState } from 'react';
import './FAQ.css';
import faq from '../images/faq.png';
import footer from '../images/footer-img.png';

const FAQ = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "What platforms will the Fitness App be available on?", answer: "The app will be available on iOS, Android, and web platforms." },
        { question: "How does the app help with tracking progress?", answer: "The app allows users to set goals, track workouts, and monitor progress over time." },
        { question: "Is there personalized coaching available in the app?", answer: "Yes, users can connect with personal trainers for tailored coaching programs." },
        { question: "What premium features does the website offer?", answer: "Premium features include advanced analytics, personalized training plans, and ad-free experience." },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const categories = [
        {
            title: "Common Questions",
            description: "Frequently asked questions about features, subscription plans, and common inquiries in fitness software.",
        },
        {
            title: "Technical Questions",
            description: "Critical technical inquiries on integrations, searches, scalability, and performance optimization for the app.",
        },
        {
            title: "Related Topics",
            description: "Key themes related to website design, wearable data synchronization, and community building topics.",
        },
        {
            title: "Topic Navigation",
            description: "A guide for exploring the structure, features, and search and navigation sections of the fitness website.",
        },
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredCategories = categories.filter((category) =>
        category.title.toLowerCase().includes(searchQuery) ||
        category.description.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="faq-section">

            {/* Search Section */}
            <div className="faq-search">
                <h1>How can we help?</h1>
                <input
                    type="text"
                    placeholder="Ask a Question"
                    onChange={handleSearch}
                    value={searchQuery}
                />
            </div>

            {/* FAQ Categories */}
            <div className="faq-categories">
                {filteredCategories.map((category, index) => (
                    <div key={index} className="faq-category-card">
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <button>Learn more</button>
                    </div>
                ))}
            </div>

            <div className="faq-section">
                {/* General FAQ Section */}
                <div className="general-faq">
                    <div className="faq-content">
                        <div className="faq-questions">
                            <h1>General FAQs</h1>
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <button onClick={() => handleToggle(index)} className="faq-question">
                                        {faq.question}
                                        <span>{activeIndex === index ? '-' : '+'}</span>
                                    </button>
                                    {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                        <div className="faq-image">
                            {/* Replace with the actual image URL */}
                            <img src={faq} alt="FAQ Illustration" />
                        </div>
                    </div>
                </div>
            </div>
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
};

export default FAQ;