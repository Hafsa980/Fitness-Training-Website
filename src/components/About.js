import React from "react";
import "./About.css";
import missionImage from '../images/aboutImage2.png';
import visionImage from '../images/aboutImage3.png';
import footer from '../images/footer-img.png';

function About() {
  return (
    <div className="about">
      {/* About Us Section */}
      <section className="about-us">
        <div className="about-content">
          {/* <img src={aboutImage} alt="About Us" className="about-image" /> */}
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              At Fitness Training, we are dedicated to helping everyone achieve their fitness goals, 
              whether you're just starting out or an experienced athlete. Our app offers personalized 
              workout plans, nutrition tracking, and a supportive community to keep you motivated. 
              We believe in making fitness accessible, fun, and effective for everyone. Join us in 
              transforming your health and wellness journey!
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To empower individuals on their fitness journey by offering a comprehensive, user-friendly 
            platform that inspires workouts, monitors nutrition, and manages progress. Our mission is 
            to foster a supportive community where users can connect, stay motivated, and achieve their 
            health goals. We focus on personalized coaching, engaging challenges, and seamless integration 
            of modern fitness tools and wearable devices.
          </p>
          <img src={missionImage} alt="Our Mission" className="mission-image" />
        </div>
      </section>

       {/* Our Vision Section */}
       <section className="our-vision">
        <div className="vision-content">
          <img src={visionImage} alt="Our Vision" className="vision-image" />
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>
              To be the foremost fitness platform that inspires and empowers individuals to lead healthier lives 
              by providing a comprehensive, personalized experience. We envision a world where everyone, regardless 
              of their fitness level, has access to the tools, knowledge, and community support they need to reach 
              their health and wellness goals. Through innovation, continuous improvement, and integration with 
              modern technologies, we aim to create a platform that not only tracks progress but motivates, educates, 
              and fosters meaningful connections within a global fitness community. Our vision is to make fitness a 
              sustainable, enjoyable, and life-changing journey for all.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Fitness Training</h3>
            <p>
              Transform your body with Fitness Training. Your journey to a healthier, stronger you starts here with our 
              expert trainers, nutrition plans, and a supportive community. Join us in making fitness an enjoyable journey.
            </p>
          </div>
          <div className="footer-company">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Blogs</p>
            <p>FAQs</p>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Fitness St., Wellness City</p>
            <p>+1 234 567 8901</p>
            <p>FitnessTrainingHQ@gmail.com</p>
          </div>
          <div className="footer-image">
            <img src={footer} alt="Footer image" />
        </div>
        </div>
        <div className="footer-socials">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <p className="footer-copy">© 2024 Fitness Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;