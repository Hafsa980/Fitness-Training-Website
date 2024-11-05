import React from "react";
import "./Blog.css";
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import customer2 from '../images/customer2.png';
import footer from '../images/footer-img.png';

// Sample blog data
const blogData = [
    {
      id: 1,
      title: "Nutrition Basics for Beginners",
      description:
        "An introductory guide to understanding macronutrients and meal planning, perfect for users just starting their fitness journey.",
      author: "Erik Riya",
      date: "20 Oct 2024",
      image: blog1,
    },
    {
      id: 2,
      title: "Healthy Eating on a Budget",
      description:
        "Strategies for meal planning and nutrition tracking without breaking the bank, appealing to cost-conscious users.",
      author: "Phoebe Baker",
      date: "19 Jan 2024",
      image: blog2,
    },
    {
        id: 3,
        title: "The Benefits of Tracking Your Fitness Progress",
        description:
          "An exploration of why logging workouts and nutrition can lead to better results and how to interpret progress graphs and statistics.",
        author: "Lana Steiner",
        date: "18 Jan 2022",
        image: blog3,
    },
    {
        id: 4,
        title: "Nutrition Basics for Beginners",
        description:
          "An introductory guide to understanding macronutrients and meal planning, perfect for users just starting their fitness journey.",
        author: "Erik Riya",
        date: "20 Oct 2024",
        image: blog1,
    },
    {
        id: 5,
        title: "Healthy Eating on a Budget",
        description:
          "Strategies for meal planning and nutrition tracking without breaking the bank, appealing to cost-conscious users.",
        author: "Phoebe Baker",
        date: "19 Jan 2024",
        image: blog2,
    },
    {
          id: 6,
          title: "The Benefits of Tracking Your Fitness Progress",
          description:
            "An exploration of why logging workouts and nutrition can lead to better results and how to interpret progress graphs and statistics.",
          author: "Lana Steiner",
          date: "18 Jan 2022",
          image: blog3,
    }
  ];

  // Sample blog1 data
const blogData1 = [
    {
      id: 1,
      title: "The Rise of Hybrid Workouts",
      description:
        "Explore how hybrid workouts are gaining popularity and how to incorporate them into your routine for maximum benefits.",
      author: "Erik Riya",
      date: "20 Oct 2024",
      image: blog1,
    },
    {
      id: 2,
      title: "Mindfulness in Fitness",
      description:
        "Learn about the growing trend of integrating mindfulness practices into fitness routines to enhance both mental and physical health.",
      author: "Phoebe Baker",
      date: "19 Jan 2024",
      image: blog2,
    },
    {
        id: 3,
        title: "Nutrition Hacks",
        description:
          "Discover practical meal prep tips inspired by fitness influencers to simplify your nutrition tracking and stay on track.",
        author: "Lana Steiner",
        date: "18 Jan 2022",
        image: blog3,
    }
  ];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our Blogs <span>Resources&Insights</span></h1>
          <p>Explore expert articles and guides on fitness and nutrition to help you achieve your health goals!</p>
        </div>
      </section>

        {/* blog 2nd Section */}
      <div className="blog-grid">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-footer">
                <div className="author-info">
                  <img
                    src={customer2} // Replace with actual author image paths
                    alt={post.author}
                    className="author-avatar"
                  />
                  <div>
                    <p className="author-name">{post.author}</p>
                    <p className="publish-date">{post.date}</p>
                  </div>
                </div>
                <a href="#" className="read-more">
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog 3rd Section */}
      <div className="blog2-page">
      <h1>Trending</h1>
      <p>Stay updated with the latest fitness trends, tips, and insights to elevate your health journey!</p>
      <div className="blog2-grid">
        {blogData1.map((post) => (
          <div key={post.id} className="blog2-card">
            <img src={post.image} alt={post.title} className="blog2-image" />
            <div className="blog22-content">
              <h3 className="blog2-title">{post.title}</h3>
              <p className="blog2-description">{post.description}</p>
              <div className="blog2-footer">
                <div className="author2-info">
                  <img
                    src={customer2} // Replace with actual author image paths
                    alt={post.author}
                    className="author2-avatar"
                  />
                  <div>
                    <p className="author2-name">{post.author}</p>
                    <p className="publish2-date">{post.date}</p>
                  </div>
                </div>
                <a href="#" className="read-more">
                  &#8594;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

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
