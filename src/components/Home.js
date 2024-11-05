import React from "react";
import "./Home.css";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import nutrition from '../images/nutrition.png';
import purpose from '../images/purpose-img.jpg';
import customer1 from '../images/customer1.png';
import customer2 from '../images/customer2.png';
import workout from '../images/workout.png';
import Nutrition from '../images/nutrition.png';
import Community from '../images/community.png';
import footer from '../images/footer-img.png';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome To <span>Fitness Training</span></h1>
          <p>Transform Your Fitness Journey with Expert Guidance</p>
          <p>
            At Fitness Training, we offer personalized coaching programs designed 
            to help you achieve your fitness goals. From strength training to holistic 
            wellness coaching, we’re here to support you every step of the way.
          </p>
          <button className="cta-button">Schedule Your Free Service Today</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <img src={img1} alt="Track Progress" />
          <h3>Track Progress</h3>
          <p>Monitor your fitness journey with detailed analytics.</p>
        </div>
        <div className="feature-card">
          <img src={img2} alt="Community Engagement" />
          <h3>Community Engagement</h3>
          <p>Engage with a supportive community of like-minded individuals.</p>
        </div>
        <div className="feature-card">
          <img src={img3} alt="Health Metrics Monitoring" />
          <h3>Health Metrics Monitoring</h3>
          <p>Keep track of key health indicators with ease.</p>
        </div>
        <div className="feature-card">
          <img src={nutrition} alt="Nutritional Guidance" />
          <h3>Nutritional Guidance</h3>
          <p>Receive personalized nutrition plans to complement your workouts.</p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose">
        <h2>Purpose</h2>
        <div className="purpose-content">
          <img src={purpose} alt="Purpose" className="purpose-image" />
          <div className="purpose-text">
            <p>
              It is designed to empower users in achieving their health and fitness goals 
              through comprehensive tracking and personalized guidance.
            </p>
            <p>
              By integrating fitness tracking, nutrition management, and progress monitoring, 
              this website allows users to easily maintain a healthy lifestyle. 
              The inclusion of community features and personalized coaching provides users with 
              the extra motivation they need to achieve their fitness goals.
            </p>
            <p>The Fitness website is designed for a wide range of users:</p>
            <div className="purpose-categories">
              <span>Fitness Enthusiasts</span>
              <span>Beginners</span>
              <span>Busy Professionals</span>
              <span>Individuals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src={customer1} alt="Customer 1" className="testimonial-image" />
            <h3>Sara D., Lost 20 lbs in 3 months</h3>
            <p>
              "I can't thank Fitness Training enough! The personalized coaching and community support 
              made all the difference in my fitness journey. I feel healthier and stronger than ever."
            </p>
            <div className="rating">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <img src={customer2} alt="Customer 2" className="testimonial-image" />
            <h3>Arya M., Marathon Runner</h3>
            <p>
              "Fitness Training helped me fine-tune my training regime and track my progress. 
              I felt more prepared and confident for my marathon, and I achieved my personal best!"
            </p>
            <div className="rating">★★★★★</div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="work">
        <div className="work-text">
        <h1>See how Our Websites Works</h1>
        <p>Explore our easy-to-use tools designed to help you stay on track.</p>
        </div>       
        <div className="work-card">
          <img src={workout} alt="Workout Log" />
          <h3>Workout Log</h3>
          <p>Easily track your sets, reps, and exercises, customize routines, and monitor your progress to stay on top of your fitness goals.</p>
        </div>
        <div className="work-card">
          <img src={Nutrition} alt="Nutrition Tracker" />
          <h3>Nutrition Tracker</h3>
          <p>Log your meals, track calories, and monitor your macronutrients to stay on top of your nutrition and reach your fitness goals.</p>
        </div>
        <div className="work-card">
          <img src={Community} alt="Community Challenges" />
          <h3>Community Challenges</h3>
          <p>Join fun fitness challenges, compete with friends, and stay motivated with a supportive community.</p>
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

export default Home;
